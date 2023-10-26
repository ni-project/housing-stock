import { createApp } from 'vue';
import App from '@/App.vue';
import CommonAppStyles from '@/assets/styles/app.scss';
import store from '@/store';

const app = createApp(App);
app.use(CommonAppStyles);
app.use(store);
app.mount('#app');
