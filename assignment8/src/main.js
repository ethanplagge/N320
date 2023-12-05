import { createApp } from 'vue';
import App from './App.vue';
import store from './store.js'
import router from './router/index.js';
import Header from './components/Header.vue';
import TeamInfo from './components/TeamInfo.vue';
import displayTeam from './components/displayTeam.vue';
import navigation from './components/navigation.vue';


const app = createApp(App);

app.component('app-header', Header);
app.component('team-info', TeamInfo);
app.component('display-team', displayTeam);
app.component('navigation', navigation);

app.use(store);
app.use(router);

app.mount('#app');
