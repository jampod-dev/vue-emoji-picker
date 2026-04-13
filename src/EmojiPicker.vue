<template>
  <div>
    <slot
      name="emoji-invoker"
      :events="{ click: (e) => toggle(e) }"
    ></slot>
    <div
      v-if="display.visible"
      v-click-outside="hide"
    >
      <slot
        name="emoji-picker"
        :emojis="emojis"
        :insert="insert"
        :display="display"
      ></slot>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue'
  import emojis from './emojis'


  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
  const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

  type Data = {
    display: {
      x: number
      y: number
      visible: boolean
    }
    loadedKeywords: Record<string, readonly string[]> | null
    frequentlyUsedEmojis: string[]
  }

  type ClickOutsideElement = HTMLElement & { __vueClickOutside__: ((e: MouseEvent) => void) | null }

  export default /*#__PURE__*/Vue.extend({
    name: 'EmojiPicker',
    props: {
      search: {
        type: String as PropType<string>,
        required: false,
        default: '',
      },
      emojiTable: {
        type: Object as PropType<Record<string, Record<string, string>>>,
        required: false,
        default() {
          return emojis
        },
      },
      extendedSearch: {
        type: Boolean,
        required: false,
        default: false,
      },
      dynamicFrequentlyUsed: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data(): Data {
      return {
        display: {
          x: 0,
          y: 0,
          visible: false,
        },
        loadedKeywords: null,
        frequentlyUsedEmojis: [],
      }
    },
    watch: {
      extendedSearch: {
        immediate: true,
        handler(val: boolean) {
          if (val && !this.loadedKeywords) {
            import('./keywords').then(m => {
              this.loadedKeywords = m.default as Record<string, readonly string[]>
            })
          }
        }
      }
    },
    computed: {
      localEmojiTable(): Record<string, Record<string, string>> {
        if (!this.dynamicFrequentlyUsed) {
          return this.emojiTable as Record<string, Record<string, string>>
        }

        const table = { ...(this.emojiTable as Record<string, Record<string, string>>) }
        const defaultFrequentlyUsed = table['Frequently used'] || {}
        
        const newFrequentlyUsed: Record<string, string> = {}
        const added = new Set<string>()

        const charToKey: Record<string, string> = {}
        for (const cat in table) {
          if (cat === 'Frequently used') continue
          for (const key in table[cat]) {
            charToKey[table[cat][key]] = key
          }
        }

        for (const emoji of this.frequentlyUsedEmojis) {
           const key = charToKey[emoji] || emoji
           newFrequentlyUsed[key] = emoji
           added.add(emoji)
           if (Object.keys(newFrequentlyUsed).length >= 7) break
        }

        for (const key in defaultFrequentlyUsed) {
          if (Object.keys(newFrequentlyUsed).length >= 7) break
          const emoji = defaultFrequentlyUsed[key]
          if (!added.has(emoji)) {
            newFrequentlyUsed[key] = emoji
            added.add(emoji)
          }
        }

        table['Frequently used'] = newFrequentlyUsed
        return table
      },
      emojis(): Record<string, Record<string, string>> {
        if (this.search) {
          const obj: Record<string, Record<string, string>> = {}

          const table = this.localEmojiTable

          for (const category in table) {
            obj[category] = {}

            for (const emoji in table[category]) {
              const searchRegex = new RegExp(`.*${escapeRegExp(this.search)}.*`, 'i')
              const matchesName = searchRegex.test(emoji)
              
              let matchesKeyword = false
              if (this.extendedSearch && this.loadedKeywords) {
                const keywords = this.loadedKeywords[emoji] || []
                matchesKeyword = keywords.some(keyword => searchRegex.test(keyword))
              }

              if (matchesName || matchesKeyword) {
                obj[category][emoji] = table[category][emoji]
              }
            }

            if (Object.keys(obj[category]).length === 0) {
              delete obj[category]
            }
          }

          return obj
        }

        return this.localEmojiTable
      },
    },
    methods: {
      insert(emoji: string): void {
        this.$emit('emoji', emoji)
        if (this.dynamicFrequentlyUsed) {
          this.trackEmoji(emoji)
        }
      },
      trackEmoji(emoji: string): void {
        try {
          const storageKey = 'vue-emoji-picker-frequent'
          const stored = localStorage.getItem(storageKey)
          let freq: Record<string, number> = {}
          if (stored) {
            try {
              freq = JSON.parse(stored)
            } catch (e) {}
          }
          freq[emoji] = (freq[emoji] || 0) + 1
          localStorage.setItem(storageKey, JSON.stringify(freq))
          this.updateFrequentlyUsedEmojis(freq)
        } catch (e) {
          // localStorage might not be available
        }
      },
      updateFrequentlyUsedEmojis(freq?: Record<string, number>): void {
        if (!freq) {
          try {
            const stored = localStorage.getItem('vue-emoji-picker-frequent')
            if (stored) {
              freq = JSON.parse(stored)
            } else {
              freq = {}
            }
          } catch(e) {
            freq = {}
          }
        }
        const sorted = Object.keys(freq || {}).sort((a, b) => (freq![b] - freq![a]))
        this.frequentlyUsedEmojis = sorted.slice(0, 7)
      },
      toggle(e: MouseEvent): void {
        this.display.visible = ! this.display.visible
        this.display.x = e.clientX
        this.display.y = e.clientY
      },
      hide(): void {
        this.display.visible = false
      },
      escape(e: KeyboardEvent): void {
        if (this.display.visible === true && e.keyCode === 27) {
          this.display.visible = false
        }
      },
    },
    directives: {
      'click-outside': {
        bind(el: ClickOutsideElement, binding: any) {
          if (typeof binding.value !== 'function') {
            return
          }

          const bubble = binding.modifiers.bubble
          const handler = (e: any) => {
            if (bubble || (! el.contains(e.target) && el !== e.target)) {
              binding.value(e)
            }
          }
          el.__vueClickOutside__ = handler

          document.addEventListener('click', handler)
        },
        unbind(el: ClickOutsideElement) {
          if (el.__vueClickOutside__ !== null) {
            document.removeEventListener('click', el.__vueClickOutside__)

            el.__vueClickOutside__ = null
          }
        },
      } as any,
    },
    mounted() {
      document.addEventListener('keyup', this.escape)
      if (this.dynamicFrequentlyUsed) {
        this.updateFrequentlyUsedEmojis()
      }
    },
    destroyed() {
      document.removeEventListener('keyup', this.escape)
    },
  })
</script>
