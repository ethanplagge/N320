import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import TeamInfo from './components/TeamInfo.vue';

const app = createApp(App);
app.component('app-header', Header);
app.component('team-info', TeamInfo);


app.mount('#app');
