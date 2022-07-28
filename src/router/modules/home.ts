export default [
  {
    path: '',
    name: '',
    component: () => import('@/layout/baseHeader.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home.vue'),
      },
    ],
  },
]
