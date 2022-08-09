const pieOption = {
  legend: {
    top: 'bottom',
    icon: 'circle', // 修改形状
    itemHeight: 6, // 修改icon图形大小
    itemGap: 4, // 修改间距
    orient: 'vertical', //布局方向
    right: 10,
    textStyle: {
      fontSize: 10,
      color: '#333',
      padding: [0, 0, 0, -8], // 修改文字和图标距离
    },
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b} : {c} ({d}%)',
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      name: '各地区收益分布',
      type: 'pie',
      radius: [10, 80],
      center: ['40%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 2, //圆角大小
      },
      labelLine: {
        normal: {
          length: 1,
        },
      },
      data: [
        { value: 73, name: '北京' },
        { value: 15, name: '上海' },
        { value: 40, name: '河南' },
        { value: 38, name: '湖北' },
        { value: 32, name: '河北' },
        { value: 30, name: '湖南' },
        { value: 28, name: '安徽' },
        { value: 18, name: '江苏' },
        { value: 58, name: '浙江' },
        { value: 52, name: '山东' },
      ],
    },
  ],
}
export default pieOption
