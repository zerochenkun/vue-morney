import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from './components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from './components/Icon.vue';
import tagListModel from '@/models/tagListModel';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
// 全局变量太多  严重依赖 window

// record store
window.recordList = recordListModel.fetch();
window.createRecord = (record: RecordItem) => recordListModel.create(record);
// tags store
window.tagList = tagListModel.fetch();
window.createTag = (name: string) => {
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名已经存在了哦！');
  } else if (message === 'success') {
    window.alert('标签名创建成功');
  }
};
window.findTag = (id: string) => {
  return window.tagList.filter(t => t.id === id)[0];
};

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app');
