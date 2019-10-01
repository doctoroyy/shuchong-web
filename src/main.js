// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {
  Pagination,
  Dialog,
  Menu,
  MenuItem,
  Input,
  Button,
  Form,
  FormItem,
  Tag,
  Icon,
  Row,
  Col,
  Card,
  Carousel,
  CarouselItem,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Divider,
  Image,
  Loading,
} from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

axios.defaults.baseURL = 'https://api.doctoroyy.cf'
Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading);
// Vue.use(Spinner);
Vue.use(Carousel);
Vue.use(CarouselItem);
// Vue.use(Collapse);
// Vue.use(CollapseItem);
// Vue.use(Cascader);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Divider);
Vue.use(Image);
Vue.use(Card);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Pagination);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // render: h => h (App)
})
