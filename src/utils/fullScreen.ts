//全屏
const screenFullEnter = () => {
  const doc: any = document.documentElement
  if (doc.requestFullscreen) {
    doc.requestFullscreen()
  }
  //FireFox
  else if (doc.mozRequestFullScreen) {
    doc.mozRequestFullScreen()
  }
  //Chrome等
  else if (doc.webkitRequestFullScreen) {
    doc.webkitRequestFullScreen()
  }
  //IE11
  else if (doc.msRequestFullscreen) {
    doc.msRequestFullscreen()
  }
}
//退出全屏
const screenFullOut = () => {
  if (!checkFull()) {
    const doc: any = document
    // 是全屏就退出全屏
    if (doc.exitFullscreen) {
      doc.exitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      ;(doc as any).mozCancelFullScreen()
    } else if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen()
    }
  }
}
// 优化： 全屏状态下，无法监听ESC按键事件，通过监听全屏事件来改变全屏状态
const checkFull = () => {
  const doc: any = document.documentElement
  if (doc.fullscreenElement) {
    return true
  } else {
    return false
  }
}

//优监控全屏状况
const voidFull = (state: boolean, data: boolean) => {
  void [
    'fullscreenchange',
    'webkitfullscreenchange',
    'mozfullscreenchange',
  ].forEach((item) => {
    window.addEventListener(item, () => {
      state = data
    })
  })
}
const fullScreen = {
  screenFullEnter,
  screenFullOut,
  checkFull,
  voidFull,
}
export default fullScreen
