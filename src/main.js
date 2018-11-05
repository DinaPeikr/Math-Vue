import Vue from 'vue'
import App from './App.vue'

import AppStartScreen from './components/StartScreen.vue';
import AppQuestion from './components/Question.vue';
import AppMessage from './components/Message.vue';
import AppResultScreen from './components/ResultScreen.vue';
import AppFinallyScreen from './components/FinallyScreen.vue';

Vue.component('AppStartScreen', AppStartScreen);
Vue.component('AppQuestion', AppQuestion);
Vue.component('AppMessage', AppMessage);
Vue.component('AppResultScreen', AppResultScreen);
Vue.component('AppFinallyScreen', AppFinallyScreen);

new Vue({
  el: '#app',
  render: h => h(App)
})
