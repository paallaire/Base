/* eslint-disable global-require */
const paddingUnit = require('./tailwindcss/units/paddingUnit');
const fontSizeUnit = require('./tailwindcss/units/fontSizeUnit');

module.exports = {
    prefix: '',
    important: true,
    separator: ':',
    theme: {
        transitionDuration: {
            // defaults to these values
            0: '0ms',
            75: '75ms',
            100: '100ms',
            150: '105ms',
            200: '200ms',
            250: '250ms',
            300: '300ms',
            500: '500ms',
        },
        transitionTimingFunction: {
            // defaults to these values

            linear: 'linear',
            ease: 'ease',
            'ease-in': 'ease-in',
            'ease-out': 'ease-out',
            'ease-in-out': 'ease-in-out',
            'material-standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
            'material-decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
            'material-accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
            'slow-bounce': 'cubic-bezier(.6,.01,0,1.38)',
        },
        iconSize: {
            xs: '10px',
            sm: '20px',
            md: '16px',
            lg: '40px',
            xl: '50px',
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            gray: {
                1: '#373535',
                2: '#eaeaea',
                3: '#d8d8d8',
                4: '#525254',
                3: '#231f20',
                5: '#f2f2f2',
                6: '#979797',
                7: '#e7e9e8',
                8: '#a2a2a2',
                9: '#343434',
            },
            blue: {
                1: '#0984e3',
            },
            red: {
                1: '#ed1c24',
            },
        },
        spacing: {
            px: '1px',
            0: '0',
            ...paddingUnit,
        },
        screens: {
            xs: '375px',
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1440px',
            xxl: '1920px',
        },
        fontFamily: {
            futura: ['futura-pt', 'sans-serif', 'Arial'],
        },
        fontSize: {
            0: '0',
            ...fontSizeUnit,
        },
        fontWeight: {
            hairline: '100',
            thin: '200',
            light: '300',
            normal: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
            extrabold: '800',
            black: '900',
        },
        lineHeight: {
            none: '1',
            compact: '1.1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            xrelaxed: '1.8',
            wide: '2',
            xwide: '2.5',
            wider: '3',
            widest: '3.5',
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        textColor: theme => theme('colors'),
        backgroundColor: theme => theme('colors'),
        cursor: {
            auto: 'auto',
            default: 'default',
            pointer: 'pointer',
            wait: 'wait',
            text: 'text',
            move: 'move',
            'not-allowed': 'not-allowed',
        },
        width: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            ...theme('maxWidth'),
            '1/2': '50%',
            '1/3': '33.33333%',
            '2/3': '66.66667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.66667%',
            '2/6': '33.33333%',
            '3/6': '50%',
            '4/6': '66.66667%',
            '5/6': '83.33333%',
            '1/12': '8.33333%',
            '2/12': '16.66667%',
            '3/12': '25%',
            '4/12': '33.33333%',
            '5/12': '41.66667%',
            '6/12': '50%',
            '7/12': '58.33333%',
            '8/12': '66.66667%',
            '9/12': '75%',
            '10/12': '83.33333%',
            '11/12': '91.66667%',
        }),
        height: theme => ({
            auto: 'auto',
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        maxWidth: {
            none: '0',
            screen: '100vw',
            full: '100%',
            large: '1040px',
            xlarge: '1160px',
            wide: '1240px',
            site: '1440px',
            xsite: '1920px',
        },
        maxHeight: {
            full: '100%',
            screen: '100vh',
        },
        padding: theme => theme('spacing'),
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
            ...theme('width'),
            ...negative(theme('width')),
        }),
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
            'nav-sticky': '99',
            'nav-mobile': '99',
            'nav-mobile-above': '100',
            overlay: '101',
            modal: '102',
            'debug-bp': '10000',
        },
        fill: {
            current: 'currentColor',
        },
        stroke: {
            current: 'currentColor',
        },
        flex: {
            1: '1 1 0%',
            auto: '1 1 auto',
            initial: '0 1 auto',
            none: 'none',
        },
        flexGrow: {
            0: '0',
            default: '1',
        },
        flexShrink: {
            0: '0',
            default: '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
        },
        ratios: {
            square: '100%',
            '16/9': '56.25%',
            '4/3': '75%',
            '21/9': '42.86%',
        },
    },
    variants: {
        appearance: ['responsive'],
        backgroundAttachment: ['responsive'],
        backgroundColor: ['responsive', 'hover', 'focus'],
        backgroundPosition: [],
        backgroundRepeat: [],
        backgroundSize: [],
        borderCollapse: [],
        borderColor: [],
        borderRadius: [],
        borderStyle: [],
        borderWidth: [],
        cursor: ['responsive'],
        display: ['responsive'],
        flexDirection: ['responsive'],
        flexWrap: ['responsive'],
        alignItems: ['responsive'],
        alignSelf: ['responsive'],
        justifyContent: ['responsive'],
        alignContent: ['responsive'],
        flex: ['responsive'],
        flexGrow: ['responsive'],
        flexShrink: ['responsive'],
        order: ['responsive'],
        float: ['responsive'],
        fontFamily: [],
        fontWeight: ['responsive', 'hover', 'focus'],
        height: [],
        lineHeight: [],
        listStylePosition: [],
        listStyleType: [],
        margin: ['responsive'],
        maxHeight: [],
        maxWidth: ['responsive'],
        minHeight: ['responsive'],
        minWidth: ['responsive'],
        objectFit: [],
        objectPosition: [],
        opacity: [],
        outline: [],
        overflow: [],
        padding: ['responsive'],
        pointerEvents: [],
        position: ['responsive'],
        inset: [],
        resize: [],
        boxShadow: [],
        fill: ['responsive'],
        stroke: ['responsive'],
        tableLayout: [],
        textAlign: ['responsive'],
        textColor: ['responsive', 'hover', 'focus'],
        fontSize: ['responsive'],
        fontStyle: ['responsive'],
        textTransform: ['responsive'],
        textDecoration: ['responsive', 'hover', 'focus'],
        fontSmoothing: ['responsive'],
        letterSpacing: ['responsive'],
        userSelect: [],
        verticalAlign: ['responsive'],
        visibility: ['responsive'],
        whitespace: ['responsive'],
        wordBreak: ['responsive'],
        width: ['responsive'],
        zIndex: ['responsive'],
        transitionProperty: [],
        transitionDuration: [],
        transitionTimingFunction: [],
        transitionDelay: [],
        willChange: [],
    },
    corePlugins: {},
    plugins: [
        require('./tailwindcss/plugins/icon-size')(['responsive']),
        require('./tailwindcss/plugins/transition')(['responsive']),
        require('./tailwindcss/plugins/aspect-ratio')(['responsive']),
        require('tailwindcss-transitions')(),
    ],
};
