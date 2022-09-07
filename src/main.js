import Vue from 'vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueSocketIO from 'vue-3-socket.io';

// createApp(App).use(store).use(router).mount('#app')

// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

// app = Vue.createApp({
//   router
// })

const app = createApp(App)

// app.use(new VueSocketIO({
//   debug: false,
//   connection: 'http://192.168.88.238:5000',
//   vuex: {
//       store,
//       actionPrefix: 'socket_',
//   }
// }));
const io = require("socket.io-client");
const socket = io("", {
  withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
});

// app.config.productionTip = false;
// app.mount('#app')

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app');


// createApp(App).use(store).use(router).mount('#app')
app.use(socket)
app.use(store)
app.use(router)

// app.use(new VueSocketIO())
//   ({
//   debug: false,
//   // connection: '',
//   vuex: {
//       store,
//       actionPrefix: 'socket_',
//   }
// });

app.mount('#app')
