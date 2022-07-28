export default [
  {
    path: '',
    name: '',
    component: () => import('@/layout/baseHeader.vue'),
    children: [
      {
        path: '/teamOverview',
        name: 'teamOverview',
        component: () => import('@/views/teamOverview/teamOverview.vue'),
      },
    ],
  },
]
