// polyfill only stable `core-js` features - ES and web standards:
import 'core-js/stable';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';

import tabInit from '@components/tabs';
import debugInit from '@debug/index';

tabInit();
debugInit();


