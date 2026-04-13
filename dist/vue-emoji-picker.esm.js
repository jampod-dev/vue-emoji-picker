import Vue from 'vue';

var emojis = {
  'Frequently used': {
    'thumbs_up': '👍',
    '-1': '👎',
    'sob': '😭',
    'confused': '😕',
    'neutral_face': '😐',
    'blush': '😊',
    'heart_eyes': '😍'
  },
  'People': {
    'smile': '😄',
    'smiley': '😃',
    'grinning': '😀',
    'blush': '😊',
    'wink': '😉',
    'heart_eyes': '😍',
    'kissing_heart': '😘',
    'kissing_closed_eyes': '😚',
    'kissing': '😗',
    'kissing_smiling_eyes': '😙',
    'stuck_out_tongue_winking_eye': '😜',
    'stuck_out_tongue_closed_eyes': '😝',
    'stuck_out_tongue': '😛',
    'flushed': '😳',
    'grin': '😁',
    'pensive': '😔',
    'relieved': '😌',
    'unamused': '😒',
    'disappointed': '😞',
    'persevere': '😣',
    'cry': '😢',
    'joy': '😂',
    'sob': '😭',
    'sleepy': '😪',
    'disappointed_relieved': '😥',
    'cold_sweat': '😰',
    'sweat_smile': '😅',
    'sweat': '😓',
    'weary': '😩',
    'tired_face': '😫',
    'fearful': '😨',
    'scream': '😱',
    'angry': '😠',
    'rage': '😡',
    'triumph': '😤',
    'confounded': '😖',
    'laughing': '😆',
    'yum': '😋',
    'mask': '😷',
    'sunglasses': '😎',
    'sleeping': '😴',
    'dizzy_face': '😵',
    'astonished': '😲',
    'worried': '😟',
    'frowning': '😦',
    'anguished': '😧',
    'imp': '👿',
    'open_mouth': '😮',
    'grimacing': '😬',
    'neutral_face': '😐',
    'confused': '😕',
    'hushed': '😯',
    'smirk': '😏',
    'expressionless': '😑',
    'man_with_gua_pi_mao': '👲',
    'man_with_turban': '👳',
    'cop': '👮',
    'construction_worker': '👷',
    'guardsman': '💂',
    'baby': '👶',
    'boy': '👦',
    'girl': '👧',
    'man': '👨',
    'woman': '👩',
    'older_man': '👴',
    'older_woman': '👵',
    'person_with_blond_hair': '👱',
    'angel': '👼',
    'princess': '👸',
    'smiley_cat': '😺',
    'smile_cat': '😸',
    'heart_eyes_cat': '😻',
    'kissing_cat': '😽',
    'smirk_cat': '😼',
    'scream_cat': '🙀',
    'crying_cat_face': '😿',
    'joy_cat': '😹',
    'pouting_cat': '😾',
    'japanese_ogre': '👹',
    'japanese_goblin': '👺',
    'see_no_evil': '🙈',
    'hear_no_evil': '🙉',
    'speak_no_evil': '🙊',
    'skull': '💀',
    'alien': '👽',
    'hankey': '💩',
    'fire': '🔥',
    'sparkles': '✨',
    'star2': '🌟',
    'dizzy': '💫',
    'boom': '💥',
    'anger': '💢',
    'sweat_drops': '💦',
    'droplet': '💧',
    'zzz': '💤',
    'dash': '💨',
    'ear': '👂',
    'eyes': '👀',
    'nose': '👃',
    'tongue': '👅',
    'lips': '👄',
    'thumbs_up': '👍',
    '-1': '👎',
    'ok_hand': '👌',
    'facepunch': '👊',
    'fist': '✊',
    'wave': '👋',
    'hand': '✋',
    'open_hands': '👐',
    'point_up_2': '👆',
    'point_down': '👇',
    'point_right': '👉',
    'point_left': '👈',
    'raised_hands': '🙌',
    'pray': '🙏',
    'clap': '👏',
    'muscle': '💪',
    'walking': '🚶',
    'runner': '🏃',
    'dancer': '💃',
    'couple': '👫',
    'family': '👪',
    'couplekiss': '💏',
    'couple_with_heart': '💑',
    'dancers': '👯',
    'ok_woman': '🙆',
    'no_good': '🙅',
    'information_desk_person': '💁',
    'raising_hand': '🙋',
    'massage': '💆',
    'haircut': '💇',
    'nail_care': '💅',
    'bride_with_veil': '👰',
    'person_with_pouting_face': '🙎',
    'person_frowning': '🙍',
    'bow': '🙇',
    'tophat': '🎩',
    'crown': '👑',
    'womans_hat': '👒',
    'athletic_shoe': '👟',
    'mans_shoe': '👞',
    'sandal': '👡',
    'high_heel': '👠',
    'boot': '👢',
    'shirt': '👕',
    'necktie': '👔',
    'womans_clothes': '👚',
    'dress': '👗',
    'running_shirt_with_sash': '🎽',
    'jeans': '👖',
    'kimono': '👘',
    'bikini': '👙',
    'briefcase': '💼',
    'handbag': '👜',
    'pouch': '👝',
    'purse': '👛',
    'eyeglasses': '👓',
    'ribbon': '🎀',
    'closed_umbrella': '🌂',
    'lipstick': '💄',
    'yellow_heart': '💛',
    'blue_heart': '💙',
    'purple_heart': '💜',
    'green_heart': '💚',
    'broken_heart': '💔',
    'heartpulse': '💗',
    'heartbeat': '💓',
    'two_hearts': '💕',
    'sparkling_heart': '💖',
    'revolving_hearts': '💞',
    'cupid': '💘',
    'love_letter': '💌',
    'kiss': '💋',
    'ring': '💍',
    'gem': '💎',
    'bust_in_silhouette': '👤',
    'speech_balloon': '💬',
    'footprints': '👣'
  },
  'Nature': {
    'dog': '🐶',
    'wolf': '🐺',
    'cat': '🐱',
    'mouse': '🐭',
    'hamster': '🐹',
    'rabbit': '🐰',
    'frog': '🐸',
    'tiger': '🐯',
    'koala': '🐨',
    'bear': '🐻',
    'pig': '🐷',
    'pig_nose': '🐽',
    'cow': '🐮',
    'boar': '🐗',
    'monkey_face': '🐵',
    'monkey': '🐒',
    'horse': '🐴',
    'sheep': '🐑',
    'elephant': '🐘',
    'panda_face': '🐼',
    'penguin': '🐧',
    'bird': '🐦',
    'baby_chick': '🐤',
    'hatched_chick': '🐥',
    'hatching_chick': '🐣',
    'chicken': '🐔',
    'snake': '🐍',
    'turtle': '🐢',
    'bug': '🐛',
    'bee': '🐝',
    'ant': '🐜',
    'beetle': '🐞',
    'snail': '🐌',
    'octopus': '🐙',
    'shell': '🐚',
    'tropical_fish': '🐠',
    'fish': '🐟',
    'dolphin': '🐬',
    'whale': '🐳',
    'racehorse': '🐎',
    'dragon_face': '🐲',
    'blowfish': '🐡',
    'camel': '🐫',
    'poodle': '🐩',
    'feet': '🐾',
    'bouquet': '💐',
    'cherry_blossom': '🌸',
    'tulip': '🌷',
    'four_leaf_clover': '🍀',
    'rose': '🌹',
    'sunflower': '🌻',
    'hibiscus': '🌺',
    'maple_leaf': '🍁',
    'leaves': '🍃',
    'fallen_leaf': '🍂',
    'herb': '🌿',
    'ear_of_rice': '🌾',
    'mushroom': '🍄',
    'cactus': '🌵',
    'palm_tree': '🌴',
    'chestnut': '🌰',
    'seedling': '🌱',
    'blossom': '🌼',
    'new_moon': '🌑',
    'first_quarter_moon': '🌓',
    'moon': '🌔',
    'full_moon': '🌕',
    'first_quarter_moon_with_face': '🌛',
    'crescent_moon': '🌙',
    'earth_asia': '🌏',
    'volcano': '🌋',
    'milky_way': '🌌',
    'stars': '🌠',
    'partly_sunny': '⛅',
    'snowman': '⛄',
    'cyclone': '🌀',
    'foggy': '🌁',
    'rainbow': '🌈',
    'ocean': '🌊'
  },
  'Objects': {
    'bamboo': '🎍',
    'gift_heart': '💝',
    'dolls': '🎎',
    'school_satchel': '🎒',
    'mortar_board': '🎓',
    'flags': '🎏',
    'fireworks': '🎆',
    'sparkler': '🎇',
    'wind_chime': '🎐',
    'rice_scene': '🎑',
    'jack_o_lantern': '🎃',
    'ghost': '👻',
    'santa': '🎅',
    'christmas_tree': '🎄',
    'gift': '🎁',
    'tanabata_tree': '🎋',
    'tada': '🎉',
    'confetti_ball': '🎊',
    'balloon': '🎈',
    'crossed_flags': '🎌',
    'crystal_ball': '🔮',
    'movie_camera': '🎥',
    'camera': '📷',
    'video_camera': '📹',
    'vhs': '📼',
    'cd': '💿',
    'dvd': '📀',
    'minidisc': '💽',
    'floppy_disk': '💾',
    'computer': '💻',
    'iphone': '📱',
    'telephone_receiver': '📞',
    'pager': '📟',
    'fax': '📠',
    'satellite': '📡',
    'tv': '📺',
    'radio': '📻',
    'loud_sound': '🔊',
    'bell': '🔔',
    'loudspeaker': '📢',
    'mega': '📣',
    'hourglass_flowing_sand': '⏳',
    'hourglass': '⌛',
    'alarm_clock': '⏰',
    'watch': '⌚',
    'unlock': '🔓',
    'lock': '🔒',
    'lock_with_ink_pen': '🔏',
    'closed_lock_with_key': '🔐',
    'key': '🔑',
    'mag_right': '🔎',
    'bulb': '💡',
    'flashlight': '🔦',
    'electric_plug': '🔌',
    'battery': '🔋',
    'mag': '🔍',
    'bath': '🛀',
    'toilet': '🚽',
    'wrench': '🔧',
    'nut_and_bolt': '🔩',
    'hammer': '🔨',
    'door': '🚪',
    'smoking': '🚬',
    'bomb': '💣',
    'gun': '🔫',
    'hocho': '🔪',
    'pill': '💊',
    'syringe': '💉',
    'moneybag': '💰',
    'yen': '💴',
    'dollar': '💵',
    'credit_card': '💳',
    'money_with_wings': '💸',
    'calling': '📲',
    'e-mail': '📧',
    'inbox_tray': '📥',
    'outbox_tray': '📤',
    'envelope_with_arrow': '📩',
    'incoming_envelope': '📨',
    'mailbox': '📫',
    'mailbox_closed': '📪',
    'postbox': '📮',
    'package': '📦',
    'memo': '📝',
    'page_facing_up': '📄',
    'page_with_curl': '📃',
    'bookmark_tabs': '📑',
    'bar_chart': '📊',
    'chart_with_upwards_trend': '📈',
    'chart_with_downwards_trend': '📉',
    'scroll': '📜',
    'clipboard': '📋',
    'date': '📅',
    'calendar': '📆',
    'card_index': '📇',
    'file_folder': '📁',
    'open_file_folder': '📂',
    'pushpin': '📌',
    'paperclip': '📎',
    'straight_ruler': '📏',
    'triangular_ruler': '📐',
    'closed_book': '📕',
    'green_book': '📗',
    'blue_book': '📘',
    'orange_book': '📙',
    'notebook': '📓',
    'notebook_with_decorative_cover': '📔',
    'ledger': '📒',
    'books': '📚',
    'book': '📖',
    'bookmark': '🔖',
    'name_badge': '📛',
    'newspaper': '📰',
    'art': '🎨',
    'clapper': '🎬',
    'microphone': '🎤',
    'headphones': '🎧',
    'musical_score': '🎼',
    'musical_note': '🎵',
    'notes': '🎶',
    'musical_keyboard': '🎹',
    'violin': '🎻',
    'trumpet': '🎺',
    'saxophone': '🎷',
    'guitar': '🎸',
    'space_invader': '👾',
    'video_game': '🎮',
    'black_joker': '🃏',
    'flower_playing_cards': '🎴',
    'mahjong': '🀄',
    'game_die': '🎲',
    'dart': '🎯',
    'football': '🏈',
    'basketball': '🏀',
    'soccer': '⚽',
    'baseball': '⚾',
    'tennis': '🎾',
    '8ball': '🎱',
    'bowling': '🎳',
    'golf': '⛳',
    'checkered_flag': '🏁',
    'trophy': '🏆',
    'ski': '🎿',
    'snowboarder': '🏂',
    'swimmer': '🏊',
    'surfer': '🏄',
    'fishing_pole_and_fish': '🎣',
    'tea': '🍵',
    'sake': '🍶',
    'beer': '🍺',
    'beers': '🍻',
    'cocktail': '🍸',
    'tropical_drink': '🍹',
    'wine_glass': '🍷',
    'fork_and_knife': '🍴',
    'pizza': '🍕',
    'hamburger': '🍔',
    'fries': '🍟',
    'poultry_leg': '🍗',
    'meat_on_bone': '🍖',
    'spaghetti': '🍝',
    'curry': '🍛',
    'fried_shrimp': '🍤',
    'bento': '🍱',
    'sushi': '🍣',
    'fish_cake': '🍥',
    'rice_ball': '🍙',
    'rice_cracker': '🍘',
    'rice': '🍚',
    'ramen': '🍜',
    'stew': '🍲',
    'oden': '🍢',
    'dango': '🍡',
    'egg': '🍳',
    'bread': '🍞',
    'doughnut': '🍩',
    'custard': '🍮',
    'icecream': '🍦',
    'ice_cream': '🍨',
    'shaved_ice': '🍧',
    'birthday': '🎂',
    'cake': '🍰',
    'cookie': '🍪',
    'chocolate_bar': '🍫',
    'candy': '🍬',
    'lollipop': '🍭',
    'honey_pot': '🍯',
    'apple': '🍎',
    'green_apple': '🍏',
    'tangerine': '🍊',
    'cherries': '🍒',
    'grapes': '🍇',
    'watermelon': '🍉',
    'strawberry': '🍓',
    'peach': '🍑',
    'melon': '🍈',
    'banana': '🍌',
    'pineapple': '🍍',
    'sweet_potato': '🍠',
    'eggplant': '🍆',
    'tomato': '🍅',
    'corn': '🌽'
  },
  'Places': {
    'house': '🏠',
    'house_with_garden': '🏡',
    'school': '🏫',
    'office': '🏢',
    'post_office': '🏣',
    'hospital': '🏥',
    'bank': '🏦',
    'convenience_store': '🏪',
    'love_hotel': '🏩',
    'hotel': '🏨',
    'wedding': '💒',
    'church': '⛪',
    'department_store': '🏬',
    'city_sunrise': '🌇',
    'city_sunset': '🌆',
    'japanese_castle': '🏯',
    'european_castle': '🏰',
    'tent': '⛺',
    'factory': '🏭',
    'tokyo_tower': '🗼',
    'japan': '🗾',
    'mount_fuji': '🗻',
    'sunrise_over_mountains': '🌄',
    'sunrise': '🌅',
    'night_with_stars': '🌃',
    'statue_of_liberty': '🗽',
    'bridge_at_night': '🌉',
    'carousel_horse': '🎠',
    'ferris_wheel': '🎡',
    'fountain': '⛲',
    'roller_coaster': '🎢',
    'ship': '🚢',
    'boat': '⛵',
    'speedboat': '🚤',
    'rocket': '🚀',
    'seat': '💺',
    'station': '🚉',
    'bullettrain_side': '🚄',
    'bullettrain_front': '🚅',
    'metro': '🚇',
    'railway_car': '🚃',
    'bus': '🚌',
    'blue_car': '🚙',
    'car': '🚗',
    'taxi': '🚕',
    'truck': '🚚',
    'rotating_light': '🚨',
    'police_car': '🚓',
    'fire_engine': '🚒',
    'ambulance': '🚑',
    'bike': '🚲',
    'barber': '💈',
    'busstop': '🚏',
    'ticket': '🎫',
    'traffic_light': '🚥',
    'construction': '🚧',
    'beginner': '🔰',
    'fuelpump': '⛽',
    'izakaya_lantern': '🏮',
    'slot_machine': '🎰',
    'moyai': '🗿',
    'circus_tent': '🎪',
    'performing_arts': '🎭',
    'round_pushpin': '📍',
    'triangular_flag_on_post': '🚩'
  },
  'Symbols': {
    'keycap_ten': '🔟',
    '1234': '🔢',
    'symbols': '🔣',
    'capital_abcd': '🔠',
    'abcd': '🔡',
    'abc': '🔤',
    'arrow_up_small': '🔼',
    'arrow_down_small': '🔽',
    'rewind': '⏪',
    'fast_forward': '⏩',
    'arrow_double_up': '⏫',
    'arrow_double_down': '⏬',
    'ok': '🆗',
    'new': '🆕',
    'up': '🆙',
    'cool': '🆒',
    'free': '🆓',
    'ng': '🆖',
    'signal_strength': '📶',
    'cinema': '🎦',
    'koko': '🈁',
    'u6307': '🈯',
    'u7a7a': '🈳',
    'u6e80': '🈵',
    'u5408': '🈴',
    'u7981': '🈲',
    'ideograph_advantage': '🉐',
    'u5272': '🈹',
    'u55b6': '🈺',
    'u6709': '🈶',
    'u7121': '🈚',
    'restroom': '🚻',
    'mens': '🚹',
    'womens': '🚺',
    'baby_symbol': '🚼',
    'wc': '🚾',
    'no_smoking': '🚭',
    'u7533': '🈸',
    'accept': '🉑',
    'cl': '🆑',
    'sos': '🆘',
    'id': '🆔',
    'no_entry_sign': '🚫',
    'underage': '🔞',
    'no_entry': '⛔',
    'negative_squared_cross_mark': '❎',
    'white_check_mark': '✅',
    'heart_decoration': '💟',
    'vs': '🆚',
    'vibration_mode': '📳',
    'mobile_phone_off': '📴',
    'ab': '🆎',
    'diamond_shape_with_a_dot_inside': '💠',
    'ophiuchus': '⛎',
    'six_pointed_star': '🔯',
    'atm': '🏧',
    'chart': '💹',
    'heavy_dollar_sign': '💲',
    'currency_exchange': '💱',
    'x': '❌',
    'exclamation': '❗',
    'question': '❓',
    'grey_exclamation': '❕',
    'grey_question': '❔',
    'o': '⭕',
    'top': '🔝',
    'end': '🔚',
    'back': '🔙',
    'on': '🔛',
    'soon': '🔜',
    'arrows_clockwise': '🔃',
    'clock12': '🕛',
    'clock1': '🕐',
    'clock2': '🕑',
    'clock3': '🕒',
    'clock4': '🕓',
    'clock5': '🕔',
    'clock6': '🕕',
    'clock7': '🕖',
    'clock8': '🕗',
    'clock9': '🕘',
    'clock10': '🕙',
    'clock11': '🕚',
    'heavy_plus_sign': '➕',
    'heavy_minus_sign': '➖',
    'heavy_division_sign': '➗',
    'white_flower': '💮',
    '100': '💯',
    'radio_button': '🔘',
    'link': '🔗',
    'curly_loop': '➰',
    'trident': '🔱',
    'small_red_triangle': '🔺',
    'black_square_button': '🔲',
    'white_square_button': '🔳',
    'red_circle': '🔴',
    'large_blue_circle': '🔵',
    'small_red_triangle_down': '🔻',
    'white_large_square': '⬜',
    'black_large_square': '⬛',
    'large_orange_diamond': '🔶',
    'large_blue_diamond': '🔷',
    'small_orange_diamond': '🔸',
    'small_blue_diamond': '🔹'
  }
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
var script = /*#__PURE__*/Vue.extend({
  name: 'EmojiPicker',
  props: {
    search: {
      type: String,
      required: false,
      default: ''
    },
    emojiTable: {
      type: Object,
      required: false,
      default() {
        return emojis;
      }
    },
    extendedSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    dynamicFrequentlyUsed: {
      type: Boolean,
      required: false,
      default: false
    },
    frequentlyUsedEmojis: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      display: {
        x: 0,
        y: 0,
        visible: false
      },
      loadedKeywords: null,
      trackedEmojis: []
    };
  },
  watch: {
    extendedSearch: {
      immediate: true,
      handler(val) {
        if (val && !this.loadedKeywords) {
          Promise.resolve().then(function () { return keywords$1; }).then(m => {
            this.loadedKeywords = m.default;
          });
        }
      }
    }
  },
  computed: {
    localEmojiTable() {
      const hasCustomFrequentlyUsed = Object.keys(this.frequentlyUsedEmojis).length > 0;
      if (!this.dynamicFrequentlyUsed && !hasCustomFrequentlyUsed) {
        return this.emojiTable;
      }
      const table = {
        ...this.emojiTable
      };
      const defaultFrequentlyUsed = hasCustomFrequentlyUsed ? this.frequentlyUsedEmojis : table['Frequently used'] || {};
      if (!this.dynamicFrequentlyUsed) {
        table['Frequently used'] = defaultFrequentlyUsed;
        return table;
      }
      const newFrequentlyUsed = {};
      const added = new Set();
      const charToKey = {};
      for (const cat in table) {
        if (cat === 'Frequently used') continue;
        for (const key in table[cat]) {
          charToKey[table[cat][key]] = key;
        }
      }
      for (const emoji of this.trackedEmojis) {
        const key = charToKey[emoji] || emoji;
        newFrequentlyUsed[key] = emoji;
        added.add(emoji);
        if (Object.keys(newFrequentlyUsed).length >= 7) break;
      }
      for (const key in defaultFrequentlyUsed) {
        if (Object.keys(newFrequentlyUsed).length >= 7) break;
        const emoji = defaultFrequentlyUsed[key];
        if (!added.has(emoji)) {
          newFrequentlyUsed[key] = emoji;
          added.add(emoji);
        }
      }
      table['Frequently used'] = newFrequentlyUsed;
      return table;
    },
    emojis() {
      if (this.search) {
        const obj = {};
        const table = this.localEmojiTable;
        for (const category in table) {
          obj[category] = {};
          for (const emoji in table[category]) {
            const searchRegex = new RegExp(`.*${escapeRegExp(this.search)}.*`, 'i');
            const matchesName = searchRegex.test(emoji);
            let matchesKeyword = false;
            if (this.extendedSearch && this.loadedKeywords) {
              const keywords = this.loadedKeywords[emoji] || [];
              matchesKeyword = keywords.some(keyword => searchRegex.test(keyword));
            }
            if (matchesName || matchesKeyword) {
              obj[category][emoji] = table[category][emoji];
            }
          }
          if (Object.keys(obj[category]).length === 0) {
            delete obj[category];
          }
        }
        return obj;
      }
      return this.localEmojiTable;
    }
  },
  methods: {
    insert(emoji) {
      this.$emit('emoji', emoji);
      if (this.dynamicFrequentlyUsed) {
        this.trackEmoji(emoji);
      }
    },
    trackEmoji(emoji) {
      try {
        const storageKey = 'vue-emoji-picker-frequent';
        const stored = localStorage.getItem(storageKey);
        let freq = {};
        if (stored) {
          try {
            freq = JSON.parse(stored);
          } catch (e) {}
        }
        freq[emoji] = (freq[emoji] || 0) + 1;
        localStorage.setItem(storageKey, JSON.stringify(freq));
        this.updateFrequentlyUsedEmojis(freq);
      } catch (e) {
        // localStorage might not be available
      }
    },
    updateFrequentlyUsedEmojis(freq) {
      if (!freq) {
        try {
          const stored = localStorage.getItem('vue-emoji-picker-frequent');
          if (stored) {
            freq = JSON.parse(stored);
          } else {
            freq = {};
          }
        } catch (e) {
          freq = {};
        }
      }
      const sorted = Object.keys(freq || {}).sort((a, b) => freq[b] - freq[a]);
      this.trackedEmojis = sorted.slice(0, 7);
    },
    toggle(e) {
      this.display.visible = !this.display.visible;
      this.display.x = e.clientX;
      this.display.y = e.clientY;
    },
    hide() {
      this.display.visible = false;
    },
    escape(e) {
      if (this.display.visible === true && e.keyCode === 27) {
        this.display.visible = false;
      }
    }
  },
  directives: {
    'click-outside': {
      bind(el, binding) {
        if (typeof binding.value !== 'function') {
          return;
        }
        const bubble = binding.modifiers.bubble;
        const handler = e => {
          if (bubble || !el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };
        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },
      unbind(el) {
        if (el.__vueClickOutside__ !== null) {
          document.removeEventListener('click', el.__vueClickOutside__);
          el.__vueClickOutside__ = null;
        }
      }
    }
  },
  mounted() {
    document.addEventListener('keyup', this.escape);
    if (this.dynamicFrequentlyUsed) {
      this.updateFrequentlyUsedEmojis();
    }
  },
  destroyed() {
    document.removeEventListener('keyup', this.escape);
  }
});

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c('div', [_vm._t("emoji-invoker", null, {
    "events": {
      click: function (e) {
        return _vm.toggle(e);
      }
    }
  }), _vm._v(" "), _vm.display.visible ? _c('div', {
    directives: [{
      name: "click-outside",
      rawName: "v-click-outside",
      value: _vm.hide,
      expression: "hide"
    }]
  }, [_vm._t("emoji-picker", null, {
    "emojis": _vm.emojis,
    "insert": _vm.insert,
    "display": _vm.display
  })], 2) : _vm._e()], 2);
};
var __vue_staticRenderFns__ = [];

/* style */
const __vue_inject_styles__ = undefined;
/* scoped */
const __vue_scope_id__ = undefined;
/* module identifier */
const __vue_module_identifier__ = undefined;
/* functional template */
const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var entry_esm = /*#__PURE__*/(() => {
  const installable = __vue_component__;
  installable.install = Vue => {
    Vue.component('EmojiPicker', installable);
  };
  return installable;
})();

var keywords = {
  'thumbs_up': ['like', 'approve', 'good'],
  '-1': ['dislike', 'bad', 'no'],
  'sob': ['sad', 'cry', 'bawling'],
  'confused': ['what', 'idk', 'dunno'],
  'neutral_face': ['meh', 'blank', 'flat'],
  'blush': ['happy', 'shy', 'cute'],
  'heart_eyes': ['love', 'crush', 'adoration'],
  'smile': ['happy', 'joy', 'pleasant'],
  'smiley': ['happy', 'joy', 'haha'],
  'grinning': ['smile', 'happy', 'grin'],
  'wink': ['joke', 'flirt', 'kidding'],
  'kissing_heart': ['love', 'flirt', 'kiss'],
  'kissing_closed_eyes': ['love', 'flirt', 'kiss'],
  'kissing': ['love', 'flirt', 'kiss'],
  'kissing_smiling_eyes': ['love', 'flirt', 'kiss'],
  'stuck_out_tongue_winking_eye': ['joke', 'silly', 'crazy'],
  'stuck_out_tongue_closed_eyes': ['joke', 'silly', 'crazy'],
  'stuck_out_tongue': ['silly', 'face', 'tongue'],
  'flushed': ['embarrassed', 'blush', 'shy'],
  'grin': ['happy', 'smile', 'joy'],
  'pensive': ['sad', 'thinking', 'hmm'],
  'relieved': ['phew', 'relax', 'safe'],
  'unamused': ['meh', 'annoyed', 'stare'],
  'disappointed': ['sad', 'upset', 'bad'],
  'persevere': ['struggle', 'trying', 'hard'],
  'cry': ['sad', 'tear', 'crying'],
  'joy': ['laugh', 'tears', 'lol'],
  'sleepy': ['zzz', 'tired', 'sleep'],
  'disappointed_relieved': ['phew', 'sweat', 'nervous'],
  'cold_sweat': ['nervous', 'scared', 'sweat'],
  'sweat_smile': ['nervous', 'awkward', 'smile'],
  'sweat': ['nervous', 'scared', 'worry'],
  'weary': ['tired', 'exhausted', 'sad'],
  'tired_face': ['tired', 'exhausted', 'sleepy'],
  'fearful': ['scared', 'shocked', 'fear'],
  'scream': ['scared', 'shocked', 'fear'],
  'angry': ['mad', 'upset', 'furious'],
  'rage': ['angry', 'mad', 'furious'],
  'triumph': ['steam', 'angry', 'proud'],
  'confounded': ['confused', 'sad', 'upset'],
  'laughing': ['lol', 'laugh', 'haha'],
  'yum': ['delicious', 'tasty', 'food'],
  'mask': ['sick', 'ill', 'covid'],
  'sunglasses': ['cool', 'shades', 'sun'],
  'sleeping': ['zzz', 'tired', 'bed'],
  'dizzy_face': ['dizzy', 'sick', 'confused'],
  'astonished': ['shocked', 'wow', 'surprised'],
  'worried': ['sad', 'nervous', 'scared'],
  'frowning': ['sad', 'upset', 'bad'],
  'anguished': ['sad', 'upset', 'scared'],
  'imp': ['devil', 'evil', 'bad'],
  'open_mouth': ['shocked', 'wow', 'surprised'],
  'grimacing': ['awkward', 'eek', 'teeth'],
  'hushed': ['quiet', 'shh', 'surprised'],
  'smirk': ['sassy', 'flirt', 'joke'],
  'expressionless': ['blank', 'meh', 'flat'],
  'man_with_gua_pi_mao': ['man', 'hat', 'boy'],
  'man_with_turban': ['man', 'turban', 'boy'],
  'cop': ['police', 'law', 'officer'],
  'construction_worker': ['builder', 'hard', 'hat'],
  'guardsman': ['guard', 'protect', 'soldier'],
  'baby': ['child', 'infant', 'kid'],
  'boy': ['child', 'kid', 'male'],
  'girl': ['child', 'kid', 'female'],
  'man': ['adult', 'male', 'guy'],
  'woman': ['adult', 'female', 'lady'],
  'older_man': ['old', 'grandpa', 'senior'],
  'older_woman': ['old', 'grandma', 'senior'],
  'person_with_blond_hair': ['blond', 'hair', 'person'],
  'angel': ['heaven', 'halo', 'good'],
  'princess': ['royal', 'queen', 'crown'],
  'smiley_cat': ['cat', 'happy', 'smile'],
  'smile_cat': ['cat', 'happy', 'grin'],
  'heart_eyes_cat': ['cat', 'love', 'crush'],
  'kissing_cat': ['cat', 'kiss', 'love'],
  'smirk_cat': ['cat', 'sassy', 'flirt'],
  'scream_cat': ['cat', 'scared', 'shock'],
  'crying_cat_face': ['cat', 'sad', 'cry'],
  'joy_cat': ['cat', 'laugh', 'lol'],
  'pouting_cat': ['cat', 'mad', 'angry'],
  'japanese_ogre': ['monster', 'evil', 'scary'],
  'japanese_goblin': ['monster', 'evil', 'scary'],
  'see_no_evil': ['monkey', 'blind', 'shy'],
  'hear_no_evil': ['monkey', 'deaf', 'ignore'],
  'speak_no_evil': ['monkey', 'quiet', 'shh'],
  'skull': ['dead', 'skeleton', 'bone'],
  'alien': ['ufo', 'space', 'et'],
  'hankey': ['crap', 'shit', 'poop'],
  'fire': ['hot', 'lit', 'flame'],
  'sparkles': ['shiny', 'clean', 'magic'],
  'star2': ['star', 'shiny', 'night'],
  'dizzy': ['star', 'dizzy', 'sick'],
  'boom': ['explosion', 'bang', 'crash'],
  'anger': ['mad', 'furious', 'upset'],
  'sweat_drops': ['water', 'drip', 'wet'],
  'droplet': ['water', 'drip', 'wet'],
  'zzz': ['sleep', 'tired', 'rest'],
  'dash': ['wind', 'air', 'fast'],
  'ear': ['hear', 'listen', 'sound'],
  'eyes': ['look', 'see', 'watch'],
  'nose': ['smell', 'sniff', 'face'],
  'tongue': ['taste', 'lick', 'mouth'],
  'lips': ['kiss', 'mouth', 'love'],
  'ok_hand': ['good', 'yes', 'perfect'],
  'facepunch': ['punch', 'hit', 'fight'],
  'fist': ['punch', 'hit', 'fight'],
  'wave': ['hello', 'goodbye', 'hand'],
  'hand': ['stop', 'high', 'five'],
  'open_hands': ['hug', 'open', 'hands'],
  'point_up_2': ['up', 'look', 'point'],
  'point_down': ['down', 'look', 'point'],
  'point_right': ['right', 'look', 'point'],
  'point_left': ['left', 'look', 'point'],
  'raised_hands': ['hooray', 'yay', 'celebrate'],
  'pray': ['please', 'thanks', 'beg'],
  'clap': ['applause', 'praise', 'yay'],
  'muscle': ['flex', 'strong', 'gym'],
  'walking': ['walk', 'go', 'move'],
  'runner': ['run', 'fast', 'sprint'],
  'dancer': ['dance', 'party', 'fun'],
  'couple': ['love', 'pair', 'date'],
  'family': ['home', 'parents', 'kids'],
  'couplekiss': ['love', 'kiss', 'date'],
  'couple_with_heart': ['love', 'heart', 'date'],
  'dancers': ['dance', 'party', 'twins'],
  'ok_woman': ['good', 'yes', 'agree'],
  'no_good': ['bad', 'stop', 'no'],
  'information_desk_person': ['help', 'info', 'sassy'],
  'raising_hand': ['question', 'ask', 'me'],
  'massage': ['relax', 'spa', 'rub'],
  'haircut': ['salon', 'hair', 'beauty'],
  'nail_care': ['polish', 'beauty', 'manicure'],
  'bride_with_veil': ['wedding', 'marriage', 'wife'],
  'person_with_pouting_face': ['mad', 'upset', 'angry'],
  'person_frowning': ['sad', 'upset', 'frown'],
  'bow': ['sorry', 'respect', 'apology'],
  'tophat': ['hat', 'magic', 'gentleman'],
  'crown': ['king', 'queen', 'royal'],
  'womans_hat': ['hat', 'fashion', 'lady'],
  'athletic_shoe': ['sneaker', 'shoe', 'run'],
  'mans_shoe': ['shoe', 'leather', 'man'],
  'sandal': ['shoe', 'summer', 'beach'],
  'high_heel': ['shoe', 'fashion', 'heel'],
  'boot': ['shoe', 'winter', 'cowboy'],
  'shirt': ['clothes', 'tshirt', 'top'],
  'necktie': ['suit', 'business', 'formal'],
  'womans_clothes': ['shirt', 'blouse', 'top'],
  'dress': ['clothes', 'fashion', 'gown'],
  'running_shirt_with_sash': ['sports', 'run', 'shirt'],
  'jeans': ['pants', 'denim', 'bottoms'],
  'kimono': ['japan', 'dress', 'clothes'],
  'bikini': ['swim', 'beach', 'summer'],
  'briefcase': ['work', 'business', 'bag'],
  'handbag': ['bag', 'purse', 'fashion'],
  'pouch': ['bag', 'purse', 'makeup'],
  'purse': ['bag', 'money', 'coin'],
  'eyeglasses': ['glasses', 'smart', 'read'],
  'ribbon': ['bow', 'gift', 'cute'],
  'closed_umbrella': ['weather', 'rain', 'dry'],
  'lipstick': ['makeup', 'kiss', 'beauty'],
  'yellow_heart': ['love', 'heart', 'yellow'],
  'blue_heart': ['love', 'heart', 'blue'],
  'purple_heart': ['love', 'heart', 'purple'],
  'green_heart': ['love', 'heart', 'green'],
  'broken_heart': ['sad', 'breakup', 'heart'],
  'heartpulse': ['love', 'heart', 'beat'],
  'heartbeat': ['love', 'heart', 'beat'],
  'two_hearts': ['love', 'heart', 'pair'],
  'sparkling_heart': ['love', 'heart', 'shiny'],
  'revolving_hearts': ['love', 'heart', 'spin'],
  'cupid': ['love', 'heart', 'arrow'],
  'love_letter': ['mail', 'love', 'note'],
  'kiss': ['lips', 'love', 'smooch'],
  'ring': ['wedding', 'marriage', 'gem'],
  'gem': ['diamond', 'jewel', 'rich'],
  'bust_in_silhouette': ['user', 'person', 'shadow'],
  'speech_balloon': ['talk', 'chat', 'say'],
  'footprints': ['walk', 'feet', 'steps'],
  'dog': ['pet', 'puppy', 'animal'],
  'wolf': ['dog', 'howl', 'wild'],
  'cat': ['pet', 'kitten', 'animal'],
  'mouse': ['rat', 'cheese', 'animal'],
  'hamster': ['pet', 'cute', 'animal'],
  'rabbit': ['bunny', 'hop', 'animal'],
  'frog': ['toad', 'hop', 'green'],
  'tiger': ['cat', 'wild', 'roar'],
  'koala': ['bear', 'cute', 'australia'],
  'bear': ['grizzly', 'wild', 'forest'],
  'pig': ['oink', 'farm', 'animal'],
  'pig_nose': ['oink', 'snout', 'animal'],
  'cow': ['moo', 'farm', 'milk'],
  'boar': ['pig', 'wild', 'tusks'],
  'monkey_face': ['ape', 'chimp', 'animal'],
  'monkey': ['ape', 'chimp', 'animal'],
  'horse': ['pony', 'ride', 'gallop'],
  'sheep': ['wool', 'farm', 'baa'],
  'elephant': ['trunk', 'big', 'wild'],
  'panda_face': ['bear', 'bamboo', 'cute'],
  'penguin': ['bird', 'ice', 'cold'],
  'bird': ['fly', 'tweet', 'wings'],
  'baby_chick': ['bird', 'chicken', 'cute'],
  'hatched_chick': ['bird', 'chicken', 'egg'],
  'hatching_chick': ['bird', 'chicken', 'egg'],
  'chicken': ['bird', 'hens', 'farm'],
  'snake': ['hiss', 'slither', 'reptile'],
  'turtle': ['slow', 'shell', 'reptile'],
  'bug': ['insect', 'fly', 'creepy'],
  'bee': ['honey', 'buzz', 'insect'],
  'ant': ['bug', 'insect', 'tiny'],
  'beetle': ['bug', 'insect', 'fly'],
  'snail': ['slow', 'shell', 'slime'],
  'octopus': ['ocean', 'tentacles', 'sea'],
  'shell': ['beach', 'sea', 'ocean'],
  'tropical_fish': ['fish', 'sea', 'ocean'],
  'fish': ['swim', 'water', 'sea'],
  'dolphin': ['Flipper', 'sea', 'ocean'],
  'whale': ['sea', 'ocean', 'big'],
  'racehorse': ['horse', 'run', 'fast'],
  'dragon_face': ['myth', 'fire', 'scary'],
  'blowfish': ['fish', 'puff', 'sea'],
  'camel': ['desert', 'hump', 'hot'],
  'poodle': ['dog', 'pet', 'fancy'],
  'feet': ['paw', 'print', 'animal'],
  'bouquet': ['flowers', 'gift', 'nature'],
  'cherry_blossom': ['flower', 'pink', 'spring'],
  'tulip': ['flower', 'spring', 'nature'],
  'four_leaf_clover': ['luck', 'green', 'irish'],
  'rose': ['flower', 'love', 'red'],
  'sunflower': ['flower', 'yellow', 'sun'],
  'hibiscus': ['flower', 'tropical', 'hawaii'],
  'maple_leaf': ['leaf', 'fall', 'autumn'],
  'leaves': ['leaf', 'nature', 'plant'],
  'fallen_leaf': ['leaf', 'fall', 'autumn'],
  'herb': ['leaf', 'plant', 'nature'],
  'ear_of_rice': ['plant', 'farm', 'food'],
  'mushroom': ['fungus', 'plant', 'food'],
  'cactus': ['plant', 'desert', 'spike'],
  'palm_tree': ['tree', 'beach', 'tropical'],
  'chestnut': ['nut', 'food', 'fall'],
  'seedling': ['plant', 'grow', 'nature'],
  'blossom': ['flower', 'yellow', 'spring'],
  'new_moon': ['space', 'sky', 'night'],
  'first_quarter_moon': ['space', 'sky', 'night'],
  'moon': ['space', 'sky', 'night'],
  'full_moon': ['space', 'sky', 'night'],
  'first_quarter_moon_with_face': ['space', 'sky', 'night'],
  'crescent_moon': ['space', 'sky', 'night'],
  'earth_asia': ['globe', 'world', 'planet'],
  'volcano': ['mountain', 'lava', 'fire'],
  'milky_way': ['space', 'stars', 'night'],
  'stars': ['sparkle', 'night', 'sky'],
  'partly_sunny': ['weather', 'cloud', 'sun'],
  'snowman': ['winter', 'cold', 'snow'],
  'cyclone': ['storm', 'weather', 'spin'],
  'foggy': ['weather', 'cloud', 'mist'],
  'rainbow': ['weather', 'color', 'sky'],
  'ocean': ['water', 'sea', 'wave'],
  'bamboo': ['plant', 'nature', 'green'],
  'gift_heart': ['present', 'love', 'box'],
  'dolls': ['toy', 'japan', 'girls'],
  'school_satchel': ['bag', 'student', 'kids'],
  'mortar_board': ['hat', 'school', 'college'],
  'flags': ['fish', 'japan', 'banner'],
  'fireworks': ['celebrate', 'boom', 'sky'],
  'sparkler': ['fire', 'celebrate', 'shiny'],
  'wind_chime': ['sound', 'breeze', 'glass'],
  'rice_scene': ['moon', 'japan', 'night'],
  'jack_o_lantern': ['halloween', 'pumpkin', 'scary'],
  'ghost': ['scary', 'boo', 'halloween'],
  'santa': ['christmas', 'claus', 'gift'],
  'christmas_tree': ['tree', 'holiday', 'december'],
  'gift': ['present', 'box', 'birthday'],
  'tanabata_tree': ['plant', 'wish', 'japan'],
  'tada': ['celebrate', 'party', 'yay'],
  'confetti_ball': ['celebrate', 'party', 'yay'],
  'balloon': ['party', 'fly', 'float'],
  'crossed_flags': ['japan', 'country', 'banner'],
  'crystal_ball': ['magic', 'fortune', 'future'],
  'movie_camera': ['film', 'video', 'record'],
  'camera': ['photo', 'picture', 'snap'],
  'video_camera': ['film', 'movie', 'record'],
  'vhs': ['tape', 'video', 'old'],
  'cd': ['disk', 'music', 'play'],
  'dvd': ['disk', 'movie', 'play'],
  'minidisc': ['disk', 'music', 'record'],
  'floppy_disk': ['save', 'data', 'computer'],
  'computer': ['laptop', 'pc', 'work'],
  'iphone': ['phone', 'mobile', 'call'],
  'telephone_receiver': ['phone', 'call', 'hear'],
  'pager': ['beep', 'text', 'call'],
  'fax': ['machine', 'paper', 'send'],
  'satellite': ['space', 'dish', 'signal'],
  'tv': ['television', 'watch', 'screen'],
  'radio': ['music', 'listen', 'broadcast'],
  'loud_sound': ['volume', 'noise', 'speaker'],
  'bell': ['ring', 'sound', 'chime'],
  'loudspeaker': ['volume', 'noise', 'shout'],
  'mega': ['cheer', 'shout', 'volume'],
  'hourglass_flowing_sand': ['time', 'wait', 'clock'],
  'hourglass': ['time', 'wait', 'clock'],
  'alarm_clock': ['time', 'wake', 'ring'],
  'watch': ['time', 'clock', 'wrist'],
  'unlock': ['open', 'key', 'safe'],
  'lock': ['close', 'key', 'safe'],
  'lock_with_ink_pen': ['secret', 'secure', 'safe'],
  'closed_lock_with_key': ['secure', 'safe', 'key'],
  'key': ['lock', 'open', 'door'],
  'mag_right': ['search', 'glass', 'zoom'],
  'bulb': ['light', 'idea', 'bright'],
  'flashlight': ['light', 'dark', 'beam'],
  'electric_plug': ['power', 'cord', 'energy'],
  'battery': ['power', 'energy', 'charge'],
  'mag': ['search', 'glass', 'zoom'],
  'bath': ['tub', 'clean', 'wash'],
  'toilet': ['wc', 'restroom', 'bathroom'],
  'wrench': ['tool', 'fix', 'build'],
  'nut_and_bolt': ['tool', 'fix', 'screw'],
  'hammer': ['tool', 'build', 'hit'],
  'door': ['open', 'close', 'entry'],
  'smoking': ['smoke', 'cigarette', 'cigar'],
  'bomb': ['boom', 'explode', 'scary'],
  'gun': ['shoot', 'weapon', 'pistol'],
  'hocho': ['knife', 'cut', 'weapon'],
  'pill': ['medicine', 'sick', 'drug'],
  'syringe': ['medicine', 'sick', 'needle'],
  'moneybag': ['cash', 'rich', 'dollar'],
  'yen': ['money', 'japan', 'cash'],
  'dollar': ['money', 'cash', 'bill'],
  'credit_card': ['money', 'pay', 'bank'],
  'money_with_wings': ['spend', 'cash', 'fly'],
  'calling': ['phone', 'contact', 'call'],
  'e-mail': ['email', 'letter', 'mail'],
  'inbox_tray': ['email', 'receive', 'mail'],
  'outbox_tray': ['email', 'send', 'mail'],
  'envelope_with_arrow': ['email', 'send', 'mail'],
  'incoming_envelope': ['email', 'receive', 'mail'],
  'mailbox': ['post', 'letter', 'mail'],
  'mailbox_closed': ['post', 'letter', 'mail'],
  'postbox': ['post', 'letter', 'mail'],
  'package': ['box', 'mail', 'ship'],
  'memo': ['note', 'write', 'pencil'],
  'page_facing_up': ['paper', 'document', 'file'],
  'page_with_curl': ['paper', 'document', 'file'],
  'bookmark_tabs': ['book', 'page', 'mark'],
  'bar_chart': ['graph', 'stats', 'data'],
  'chart_with_upwards_trend': ['graph', 'stats', 'data'],
  'chart_with_downwards_trend': ['graph', 'stats', 'data'],
  'scroll': ['paper', 'document', 'ancient'],
  'clipboard': ['note', 'board', 'paper'],
  'date': ['calendar', 'day', 'month'],
  'calendar': ['date', 'day', 'month'],
  'card_index': ['file', 'organize', 'contact'],
  'file_folder': ['directory', 'organize', 'files'],
  'open_file_folder': ['directory', 'organize', 'files'],
  'pushpin': ['tack', 'pin', 'mark'],
  'paperclip': ['attach', 'clip', 'paper'],
  'straight_ruler': ['measure', 'math', 'school'],
  'triangular_ruler': ['measure', 'math', 'school'],
  'closed_book': ['read', 'school', 'learn'],
  'green_book': ['read', 'school', 'learn'],
  'blue_book': ['read', 'school', 'learn'],
  'orange_book': ['read', 'school', 'learn'],
  'notebook': ['write', 'school', 'notes'],
  'notebook_with_decorative_cover': ['write', 'notes', 'pretty'],
  'ledger': ['notes', 'math', 'money'],
  'books': ['read', 'library', 'school'],
  'book': ['read', 'open', 'learn'],
  'bookmark': ['page', 'mark', 'read'],
  'name_badge': ['hello', 'tag', 'name'],
  'newspaper': ['news', 'paper', 'read'],
  'art': ['paint', 'draw', 'creative'],
  'clapper': ['movie', 'film', 'action'],
  'microphone': ['sing', 'karaoke', 'speak'],
  'headphones': ['music', 'listen', 'audio'],
  'musical_score': ['music', 'notes', 'song'],
  'musical_note': ['music', 'song', 'sing'],
  'notes': ['music', 'song', 'sing'],
  'musical_keyboard': ['piano', 'instrument', 'music'],
  'violin': ['instrument', 'music', 'strings'],
  'trumpet': ['instrument', 'music', 'brass'],
  'saxophone': ['instrument', 'music', 'jazz'],
  'guitar': ['instrument', 'music', 'rock'],
  'space_invader': ['game', 'alien', 'arcade'],
  'video_game': ['play', 'console', 'arcade'],
  'black_joker': ['card', 'game', 'play'],
  'flower_playing_cards': ['card', 'game', 'japan'],
  'mahjong': ['game', 'tile', 'play'],
  'game_die': ['dice', 'luck', 'play'],
  'dart': ['bullseye', 'game', 'target'],
  'football': ['sports', 'ball', 'game'],
  'basketball': ['sports', 'ball', 'game'],
  'soccer': ['sports', 'ball', 'game'],
  'baseball': ['sports', 'ball', 'game'],
  'tennis': ['sports', 'ball', 'racquet'],
  '8ball': ['pool', 'billiards', 'game'],
  'bowling': ['sports', 'strike', 'ball'],
  'golf': ['sports', 'putt', 'hole'],
  'checkered_flag': ['race', 'car', 'finish'],
  'trophy': ['win', 'award', 'prize'],
  'ski': ['snow', 'winter', 'sports'],
  'snowboarder': ['snow', 'winter', 'sports'],
  'swimmer': ['water', 'pool', 'sports'],
  'surfer': ['wave', 'ocean', 'sports'],
  'fishing_pole_and_fish': ['water', 'catch', 'hobby'],
  'tea': ['drink', 'hot', 'cup'],
  'sake': ['drink', 'alcohol', 'japan'],
  'beer': ['drink', 'alcohol', 'mug'],
  'beers': ['drink', 'cheers', 'alcohol'],
  'cocktail': ['drink', 'alcohol', 'glass'],
  'tropical_drink': ['drink', 'juice', 'beach'],
  'wine_glass': ['drink', 'alcohol', 'grapes'],
  'fork_and_knife': ['eat', 'food', 'meal'],
  'pizza': ['food', 'cheese', 'slice'],
  'hamburger': ['food', 'burger', 'meat'],
  'fries': ['food', 'potato', 'chip'],
  'poultry_leg': ['food', 'meat', 'chicken'],
  'meat_on_bone': ['food', 'meat', 'caveman'],
  'spaghetti': ['food', 'pasta', 'italy'],
  'curry': ['food', 'spicy', 'rice'],
  'fried_shrimp': ['food', 'seafood', 'tempura'],
  'bento': ['food', 'box', 'japan'],
  'sushi': ['food', 'fish', 'rice'],
  'fish_cake': ['food', 'japan', 'swirl'],
  'rice_ball': ['food', 'japan', 'seaweed'],
  'rice_cracker': ['food', 'snack', 'japan'],
  'rice': ['food', 'bowl', 'white'],
  'ramen': ['food', 'soup', 'noodles'],
  'stew': ['food', 'soup', 'hot'],
  'oden': ['food', 'stick', 'japan'],
  'dango': ['food', 'sweet', 'japan'],
  'egg': ['food', 'fry', 'breakfast'],
  'bread': ['food', 'toast', 'loaf'],
  'doughnut': ['food', 'sweet', 'donut'],
  'custard': ['food', 'dessert', 'pudding'],
  'icecream': ['food', 'sweet', 'cone'],
  'ice_cream': ['food', 'sweet', 'scoop'],
  'shaved_ice': ['food', 'sweet', 'cold'],
  'birthday': ['party', 'cake', 'celebrate'],
  'cake': ['food', 'dessert', 'sweet'],
  'cookie': ['food', 'sweet', 'chocolate'],
  'chocolate_bar': ['food', 'sweet', 'candy'],
  'candy': ['food', 'sweet', 'treat'],
  'lollipop': ['food', 'sweet', 'candy'],
  'honey_pot': ['food', 'sweet', 'bee'],
  'apple': ['fruit', 'food', 'red'],
  'green_apple': ['fruit', 'food', 'green'],
  'tangerine': ['fruit', 'orange', 'food'],
  'cherries': ['fruit', 'food', 'red'],
  'grapes': ['fruit', 'food', 'purple'],
  'watermelon': ['fruit', 'food', 'summer'],
  'strawberry': ['fruit', 'food', 'red'],
  'peach': ['fruit', 'food', 'butt'],
  'melon': ['fruit', 'food', 'cantaloupe'],
  'banana': ['fruit', 'food', 'yellow'],
  'pineapple': ['fruit', 'food', 'tropical'],
  'sweet_potato': ['food', 'vegetable', 'yam'],
  'eggplant': ['food', 'vegetable', 'purple'],
  'tomato': ['fruit', 'food', 'red'],
  'corn': ['food', 'vegetable', 'yellow'],
  'house': ['home', 'building', 'live'],
  'house_with_garden': ['home', 'yard', 'live'],
  'school': ['learn', 'education', 'building'],
  'office': ['work', 'building', 'job'],
  'post_office': ['mail', 'building', 'letters'],
  'hospital': ['health', 'medicine', 'doctors'],
  'bank': ['money', 'cash', 'building'],
  'convenience_store': ['shop', 'buy', 'building'],
  'love_hotel': ['hotel', 'heart', 'building'],
  'hotel': ['sleep', 'vacation', 'stay'],
  'wedding': ['marriage', 'bride', 'church'],
  'church': ['religion', 'pray', 'cross'],
  'department_store': ['shop', 'mall', 'buy'],
  'city_sunrise': ['morning', 'sky', 'buildings'],
  'city_sunset': ['evening', 'sky', 'buildings'],
  'japanese_castle': ['japan', 'building', 'history'],
  'european_castle': ['building', 'history', 'royal'],
  'tent': ['camping', 'outdoor', 'sleep'],
  'factory': ['building', 'smoke', 'work'],
  'tokyo_tower': ['japan', 'tower', 'landmark'],
  'japan': ['country', 'map', 'nation'],
  'mount_fuji': ['japan', 'mountain', 'nature'],
  'sunrise_over_mountains': ['morning', 'sun', 'nature'],
  'sunrise': ['morning', 'sun', 'sky'],
  'night_with_stars': ['evening', 'sky', 'city'],
  'statue_of_liberty': ['usa', 'ny', 'landmark'],
  'bridge_at_night': ['lights', 'city', 'evening'],
  'carousel_horse': ['fair', 'park', 'ride'],
  'ferris_wheel': ['fair', 'park', 'ride'],
  'fountain': ['water', 'park', 'statue'],
  'roller_coaster': ['ride', 'fun', 'park'],
  'ship': ['boat', 'sea', 'ocean'],
  'boat': ['sail', 'sea', 'water'],
  'speedboat': ['fast', 'water', 'boat'],
  'rocket': ['space', 'launch', 'fly'],
  'seat': ['chair', 'sit', 'plane'],
  'station': ['train', 'ride', 'travel'],
  'bullettrain_side': ['train', 'fast', 'travel'],
  'bullettrain_front': ['train', 'fast', 'travel'],
  'metro': ['subway', 'train', 'travel'],
  'railway_car': ['train', 'travel', 'ride'],
  'bus': ['travel', 'ride', 'vehicle'],
  'blue_car': ['drive', 'auto', 'vehicle'],
  'car': ['drive', 'auto', 'vehicle'],
  'taxi': ['cab', 'ride', 'city'],
  'truck': ['drive', 'big', 'carry'],
  'rotating_light': ['police', 'siren', 'emergency'],
  'police_car': ['cop', 'patrol', 'law'],
  'fire_engine': ['fire', 'truck', 'emergency'],
  'ambulance': ['hospital', 'sick', 'emergency'],
  'bike': ['ride', 'cycle', 'pedal'],
  'barber': ['hair', 'cut', 'salon'],
  'busstop': ['wait', 'ride', 'sign'],
  'ticket': ['admit', 'movie', 'show'],
  'traffic_light': ['stop', 'go', 'drive'],
  'construction': ['build', 'work', 'sign'],
  'beginner': ['new', 'start', 'japan'],
  'fuelpump': ['gas', 'car', 'station'],
  'izakaya_lantern': ['light', 'japan', 'paper'],
  'slot_machine': ['casino', 'gamble', 'game'],
  'moyai': ['statue', 'stone', 'face'],
  'circus_tent': ['carnival', 'fun', 'tent'],
  'performing_arts': ['theater', 'drama', 'masks'],
  'round_pushpin': ['tack', 'pin', 'map'],
  'triangular_flag_on_post': ['mark', 'flag', 'sign'],
  'keycap_ten': ['number', 'math', '10'],
  '1234': ['numbers', 'math', 'input'],
  'symbols': ['math', 'characters', 'sign'],
  'capital_abcd': ['letters', 'alphabet', 'text'],
  'abcd': ['letters', 'alphabet', 'text'],
  'abc': ['letters', 'alphabet', 'text'],
  'arrow_up_small': ['triangle', 'point', 'direction'],
  'arrow_down_small': ['triangle', 'point', 'direction'],
  'rewind': ['backward', 'play', 'music'],
  'fast_forward': ['forward', 'play', 'music'],
  'arrow_double_up': ['fast', 'top', 'direction'],
  'arrow_double_down': ['fast', 'bottom', 'direction'],
  'ok': ['yes', 'agree', 'good'],
  'new': ['fresh', 'sign', 'store'],
  'up': ['above', 'direction', 'high'],
  'cool': ['ice', 'awesome', 'word'],
  'free': ['no cost', 'giveaway', 'sign'],
  'ng': ['no', 'bad', 'sign'],
  'signal_strength': ['wifi', 'bars', 'connection'],
  'cinema': ['movie', 'film', 'theater'],
  'koko': ['here', 'japan', 'sign'],
  'u6307': ['finger', 'japan', 'sign'],
  'u7a7a': ['empty', 'japan', 'sign'],
  'u6e80': ['full', 'japan', 'sign'],
  'u5408': ['together', 'japan', 'sign'],
  'u7981': ['prohibit', 'japan', 'sign'],
  'ideograph_advantage': ['good', 'japan', 'sign'],
  'u5272': ['divide', 'japan', 'sign'],
  'u55b6': ['open', 'japan', 'sign'],
  'u6709': ['have', 'japan', 'sign'],
  'u7121': ['nothing', 'japan', 'sign'],
  'restroom': ['bathroom', 'toilet', 'wc'],
  'mens': ['bathroom', 'man', 'sign'],
  'womens': ['bathroom', 'woman', 'sign'],
  'baby_symbol': ['child', 'nursery', 'sign'],
  'wc': ['water closet', 'bathroom', 'toilet'],
  'no_smoking': ['cigarette', 'stop', 'sign'],
  'u7533': ['apply', 'japan', 'sign'],
  'accept': ['yes', 'agree', 'japan'],
  'cl': ['clear', 'clean', 'sign'],
  'sos': ['help', 'emergency', 'save'],
  'id': ['identification', 'badge', 'card'],
  'no_entry_sign': ['stop', 'block', 'circle'],
  'underage': ['18', 'young', 'limit'],
  'no_entry': ['stop', 'block', 'sign'],
  'negative_squared_cross_mark': ['x', 'no', 'wrong'],
  'white_check_mark': ['yes', 'good', 'correct'],
  'heart_decoration': ['love', 'pink', 'box'],
  'vs': ['versus', 'battle', 'fight'],
  'vibration_mode': ['phone', 'silent', 'shake'],
  'mobile_phone_off': ['quiet', 'silent', 'screen'],
  'ab': ['blood', 'type', 'letters'],
  'diamond_shape_with_a_dot_inside': ['cute', 'blue', 'jewel'],
  'ophiuchus': ['zodiac', 'sign', 'astrology'],
  'six_pointed_star': ['jewish', 'religion', 'star'],
  'atm': ['money', 'cash', 'bank'],
  'chart': ['graph', 'finance', 'money'],
  'heavy_dollar_sign': ['money', 'cash', 'buy'],
  'currency_exchange': ['money', 'trade', 'cash'],
  'x': ['no', 'stop', 'wrong'],
  'exclamation': ['warning', 'alert', 'surprise'],
  'question': ['ask', 'confused', 'what'],
  'grey_exclamation': ['warning', 'alert', 'surprise'],
  'grey_question': ['ask', 'confused', 'what'],
  'o': ['circle', 'round', 'shape'],
  'top': ['high', 'best', 'up'],
  'end': ['finish', 'stop', 'last'],
  'back': ['return', 'reverse', 'arrow'],
  'on': ['start', 'go', 'arrow'],
  'soon': ['wait', 'arrow', 'time'],
  'arrows_clockwise': ['spin', 'repeat', 'reload'],
  'clock12': ['time', 'noon', 'midnight'],
  'clock1': ['time', 'hour', 'watch'],
  'clock2': ['time', 'hour', 'watch'],
  'clock3': ['time', 'hour', 'watch'],
  'clock4': ['time', 'hour', 'watch'],
  'clock5': ['time', 'hour', 'watch'],
  'clock6': ['time', 'hour', 'watch'],
  'clock7': ['time', 'hour', 'watch'],
  'clock8': ['time', 'hour', 'watch'],
  'clock9': ['time', 'hour', 'watch'],
  'clock10': ['time', 'hour', 'watch'],
  'clock11': ['time', 'hour', 'watch'],
  'heavy_plus_sign': ['math', 'add', 'more'],
  'heavy_minus_sign': ['math', 'subtract', 'less'],
  'heavy_division_sign': ['math', 'divide', 'split'],
  'white_flower': ['japan', 'cute', 'stamp'],
  '100': ['perfect', 'score', 'excellent'],
  'radio_button': ['select', 'choice', 'circle'],
  'link': ['chain', 'url', 'connect'],
  'curly_loop': ['loop', 'line', 'draw'],
  'trident': ['spear', 'weapon', 'pitchfork'],
  'small_red_triangle': ['shape', 'point', 'up'],
  'black_square_button': ['shape', 'box', 'button'],
  'white_square_button': ['shape', 'box', 'button'],
  'red_circle': ['shape', 'round', 'dot'],
  'large_blue_circle': ['shape', 'round', 'dot'],
  'small_red_triangle_down': ['shape', 'point', 'down'],
  'white_large_square': ['shape', 'box', 'blank'],
  'black_large_square': ['shape', 'box', 'filled'],
  'large_orange_diamond': ['shape', 'jewel', 'orange'],
  'large_blue_diamond': ['shape', 'jewel', 'blue'],
  'small_orange_diamond': ['shape', 'jewel', 'orange'],
  'small_blue_diamond': ['shape', 'jewel', 'blue']
};

var keywords$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': keywords
});

export { __vue_component__ as EmojiPicker, entry_esm as default };
