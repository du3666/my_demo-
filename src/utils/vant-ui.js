import { createApp } from 'vue';
import { Tabbar, TabbarItem,Icon } from 'vant';

const app = createApp();
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);