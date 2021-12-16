import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/artdetail', component: '@/pages/index' },
    { path: '/', component: '@/pages/artDetail' },
  ],
  fastRefresh: {},
});
