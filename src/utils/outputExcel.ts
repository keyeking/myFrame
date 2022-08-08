/**
 * 导出表格数据到 Excel 文件
 * @param {Array} tableData - 表格数据
 * @param {Array} fieldLabels - 表头组成的数组
 * @param {Array} fieldKeys - 列属性名组成的数组
 * @param {String} fileName - 导出的文件名
 */
function exportExcel(
  tableData: any,
  fieldLabels: any,
  fieldKeys: any,
  fileName: any,
) {
  let dataStr = fieldLabels.toString() + '\r\n'
  tableData.forEach((item: any) => {
    fieldKeys.forEach((key: string) => {
      // 加引号是为了使换行符在单元格内正常显示
      dataStr += `"${item[key]}"\t,`
    })
    dataStr += '\r\n'
  })

  // encodeURIComponent 解决中文乱码
  const url: string =
    'data:text/xls;charset=utf-8,\ufeff' + encodeURIComponent(dataStr)
  const link: HTMLAnchorElement = document.createElement('a')
  link.href = url
  link.download = fileName + '.xls'
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link) //释放标签
}
