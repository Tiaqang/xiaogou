import Vue from 'vue';

import weex from 'weex-vue-render';

weex.init(Vue);
const App = require('..\\src\\index.vue');

import router from '../src/router.js';

import mixins from '../src/mixins';
Vue.mixin(mixins);
new Vue(Vue.util.extend({
    el: '#root',
    router,
    },App));
router.push('/first');