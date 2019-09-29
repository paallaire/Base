// polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'dom4';
import 'whatwg-fetch';

import webFontLoad from './utils/webFonts';
import polyfillsLoader from './utils/polyfillsLoader';
import GridVisualizer from './utils/GridVisualizer';
import { getEnv, setEnvOnBody, getLang } from './utils/environment';

/* --------------------------------------------------------------------------------
Vue
-------------------------------------------------------------------------------- */
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';

import store from './store/index';

// Directives

// Components

// App
const vm = new Vue({
    el: '#app',
    store,
    components: {},
    data: {},
    computed: {
        ...mapGetters(['lang', 'env', 'modal', 'hasMenuCanvas', 'hasBodyScroll']),
    },
    watch: {},
    methods: {
        ...mapMutations(['setModal', 'setNavCanvas', 'setBodyScroll']),
    },
    mounted() {
        // setEnvOnBody();
        // console.log('getEnv', getEnv());
        // console.log('getLang', getLang());

        webFontLoad();
        polyfillsLoader();

        if (getEnv() === 'dev') {
            let websiteGrid = new GridVisualizer({
                numberColumns: 12,
                containerCSsClass: 'mx-auto max-w-5xl',
                rowCssClass: 'flex -mx-2',
                columnsCssClass: 'w-1/12 px-2',
                blockCssClass: 'bg-gray-400',
            });
            websiteGrid.init();
        }
    },
    destroyed() {},
});
