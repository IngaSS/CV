/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  prefix: '',
  important: false,
  purge: false,
  separator: ':',
  theme: {
    screens: {
      mobile: { max: '576px' },
      tablet: { min: '577px', max: '1250px' },
    },
    colors: {
      color1: '#F7F7F7',
      color2: '#0A2D9F',
      color3: '#072071',

      color4: '#D0D5DD',
      color5: '#98A2B3',
      color6: '#667085',
      color7: '#475467',
      color8: '#344054',
      color9: '#08151E',
      color10: '#FFFFFF',
      color11: '#F7F7F7',
      color12: '#072071',
      color13: '#0A2D9F',
      color14: '#0D3ACD',
      color15: '#194CF1',
      color16: '#4770F4',
      color17: '#7594F6',
      color18: '#A3B8F9',
      color19: '#D1DBFC',
      color20: '#013B8E',
      color21: '#CCDEEA',
      color22: '#FDAE60',
      color23: '#C9DED2',
      color24: '#EDE8D2',
      color25: '#ADC5D5',
      color26: '#EE5600',
      color27: '#12B76A',
      color31: 'rgba(255, 255, 255, 0.2)',
      white: '#ffffff',
      transparent: 'transparent',
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      36: '2.25rem',
      38: '2.375rem',
      40: '2.5rem',
      44: '2.75rem',
      46: '2.875rem',
      48: '3rem',
      56: '3.5rem',
      60: '3.75rem',
      64: '4rem',
      66: '4.75rem',
      80: '5rem',
      84: '5.25rem',
      88: '5.5rem',
      100: '6.25rem',
      112: '7rem',
      126: '7.875rem',
      132: '8.25rem',
      144: '9rem',
      164: '10.25rem',
      176: '11rem',

      '2per': '2%',
      full: '100%',
      'neg-1': '-0.0625rem',
      'neg-2': '-0.125rem',
      'neg-4': '-0.25rem',
      'neg-32': '-2rem',
    },
    size: {
      auto: 'auto',
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '9/10': '90%',
      '1/6': '16.66667%',
      '5/6': '83.33333%',
      '1/10': '10%',
      '70%': '70%',
      '85%': '85%',
      '55%': '55%',
      '95%': '95%',

      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      4: '0.25rem',
      6: '0.375rem',
      8: '0.5rem',
      10: '0.625rem',
      12: '0.75rem',

      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      36: '2.25rem',
      38: '2.375rem',
      40: '2.5rem',
      42: '2.625rem',
      44: '2.75rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      56: '3.5rem',
      60: '3.75rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      84: '5.25rem',
      100: '6.25rem',
      120: '7.5rem',
      128: '8rem',
      160: '10rem',
      190: '11.875rem',
      192: '12rem',
      200: '12.5rem',
      224: '14rem',
      236: '14.75rem',
      240: '15rem',
      256: '16rem',
      272: '17rem',
      288: '18rem',
      320: '20rem',
      360: '22.5rem',
      375: '23.4375rem',
      400: '25rem',
      420: '26.25rem',
      504: '31.5rem',
      524: '32.75rem',
      528: '33rem',
      664: '41.5rem',
      full: '100%',
      none: 'none',
      unset: 'unset',
      layout: '1440px',
      fit: 'fit-content',
    },

    fontSize: {
      base: '0.75rem',
      10: '0.625rem',
      12: '0.75rem',
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      24: '1.5rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      36: '2.25rem',
      40: '2.5rem',
      48: '3rem',
      50: '3.125rem',
      52: '3.25rem',
      64: '4rem',
      72: '4.5rem',
      80: '5rem',
      88: '5.5rem',
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
      14: '0.875rem',
      16: '1rem',
      18: '1.125rem',
      20: '1.25rem',
      22: '1.375rem',
      24: '1.5rem',
      26: '1.625rem',
      28: '1.75rem',
      30: '1.875rem',
      32: '2rem',
      36: '2.25rem',
      34: '2.125rem',
      40: '2.5rem',
      48: '3rem',
      52: '3.25rem',
      56: '3.5rem',
      74: '4.625rem',
      76: '4.75rem',
      80: '5rem',
      92: '5.75rem',
      initial: 'initial',
    },
    textColor: (theme) => theme('colors'),
    background: (theme) => theme('colors'),
    fill: (theme) => ({
      ...theme('colors'),
      none: 'none',
    }),
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderWidth: {
      default: '0.0625rem',
      0: '0',
      1: '0.0625rem',
      2: '0.125rem',
      3: '0.1875rem',
      4: '0.25rem',
    },
    hoverDark: (theme) => ({
      ...theme('colors'),
      default: theme('colors.black', 'currentColor'),
    }),
    borderRadius: {
      none: '0',
      2: '0.125rem',
      3: '0.1875rem',
      4: '0.25rem',
      5: '0.3125rem',
      7: '0.4375rem',
      8: '0.5rem',
      10: '0.625rem',
      20: '1.25rem',
      24: '1.5rem',
      48: '3rem',
      64: '4rem',
      100: '6.25rem',
      full: '50%',
    },
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      move: 'move',
      text: 'text',
      'not-allowed': 'not-allowed',
      'col-resize': 'col-resize',
      grabbing: 'grabbing',
      help: 'help',
    },
    width: (theme) => ({
      ...theme('size'),
      screen: '100vw',
    }),
    height: (theme) => ({
      ...theme('size'),
      screen: '100vh',
    }),
    minWidth: (theme) => ({
      ...theme('width'),
    }),
    minHeight: (theme) => ({
      ...theme('height'),
    }),
    maxWidth: (theme) => ({
      ...theme('width'),
    }),
    maxHeight: (theme) => ({
      ...theme('height'),
    }),
    padding: (theme) => theme('spacing'),
    margin: (theme) => ({ auto: 'auto', ...theme('spacing') }),
    negativeMargin: (theme) => theme('spacing'),
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    boxShadow: {
      default: '0 0.0625rem 0.1875rem 0 rgba(0, 0, 0, .1), 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, .06)',
      md: '0 0.25rem 0.375rem -0.0625rem rgba(0, 0, 0, .1), 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, .06)',
      lg: '0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, .1), 0 0.25rem 0.375rem -0.125rem rgba(0, 0, 0, .05)',
      xl: '0 1.25rem 1.5625rem -0.3125rem rgba(0, 0, 0, .1), 0 0.625rem 0.625rem -0.3125rem rgba(0, 0, 0, .04)',
      '2xl': '0 1.5625rem 3.125rem -0.75rem rgba(0, 0, 0, .25)',
      inner: 'inset 0 0.125rem 0.25rem 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 0.1875rem rgba(66,153,225,0.5)',
      none: 'none',
      btn_hover: '0 0 0 0.25rem #e4e7ec',
      btn_secondary: '0 0 0 0.0625rem #F2F4F7',
      btn_primary: '0 0 0 0.0625rem #072071',
      list_item:
        '0px 4px 8px rgba(7, 32, 113, 0.04), 0px 0px 2px rgba(7, 32, 113, 0.05), 0px 0px 1px rgba(7, 32, 113, 0.04);',
    },
    zIndex: {
      auto: 'auto',
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      10: 10,
      15: 15,
      20: 20,
      25: 25,
      30: 30,
      35: 35,
      40: 40,
      45: 45,
      50: 50,
      55: 55,
      60: 60,
      65: 65,
      70: 70,
      75: 75,
      80: 80,
      85: 85,
      90: 90,
      95: 95,
      full: 100,
    },
    opacity: {
      0: '0',
      4: '0.04',
      8: '0.08',
      15: '0.15',
      25: '0.25',
      30: '0.3',
      50: '0.5',
      75: '0.75',
      80: '0.8',
      100: '1',
    },
    strokeWidth: {
      1: '1px',
      2: '2px',
      3: '3px',
    },

    stroke: (theme) => ({
      ...theme('colors'),
      current: 'currentColor',
    }),
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    flexGrow: {
      0: 0,
      default: 1,
    },
    flexShrink: {
      0: 0,
      1: 1,
      default: 1,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    inset: (theme) => ({
      ...theme('spacing'),
      0: 0,
      auto: 'auto',
    }),
    container: {},
  },
  variants: [],
  corePlugins: {
    float: false,
    container: false,
    accessibility: false,
    alignContent: false,
    animation: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundClip: false,
    backgroundImage: false,
    backgroundOpacity: false,
    backgroundPosition: false,
    borderCollapse: false,
    borderOpacity: false,
    boxSizing: false,
    clear: false,
    divideColor: false,
    divideOpacity: false,
    divideStyle: false,
    divideWidth: false,
    fontFamily: false,
    fontSmoothing: false,
    fontVariantNumeric: false,
    gradientColorStops: false,
    letterSpacing: false,
    listStylePosition: false,
    order: false,
    placeContent: false,
    placeholderColor: false,
    placeholderOpacity: false,
    placeItems: false,
    placeSelf: false,
  },

  plugins: [],
}
