export default [
  {
    path: '',
    name: '',
    component: () => import('@/layout/baseHeader.vue'),
    children: [
      {
        path: '/myTeam',
        name: 'myTeam',
        component: () => import('@/views/myTeam/myTeam.vue'),
      },
    ],
  },
]
