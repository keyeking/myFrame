export default [
  {
    path: '',
    name: '',
    component: () => import('@/layout/baseHeader.vue'),
    children: [
      {
        path: '/members',
        name: 'members',
        component: () => import('@/views/members/members.vue'),
      },
    ],
  },
]
