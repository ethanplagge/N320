import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

//importing components
import Navigation from './components/Navigation.vue';
import SessionView from './views/SessionView.vue';
import HeaderSlot from './components/HeaderSlot.vue';

const app = createApp(App)

app.component("Navigation-info", Navigation);
app.component("Session-view", SessionView);
app.component("HeaderSlot", HeaderSlot);

app.use(router)
app.mount('#app')
