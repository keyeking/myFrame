export default [
  {
    path: '',
    name: '',
    component: () => import('@/layout/baseHeader.vue'),
    children: [
      {
        path: '/overallAnalysis',
        name: 'overallAnalysis',
        component: () => import('@/views/analysis/overallAnalysis.vue'),
      },
      {
        path: '/teamAnalysis',
        name: 'teamAnalysis',
        component: () => import('@/views/analysis/teamAnalysis.vue'),
      },
    ],
  },
]
