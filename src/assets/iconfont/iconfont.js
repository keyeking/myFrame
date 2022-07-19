!(function (e) {
  var t,
    n,
    c,
    o,
    i,
    a =
      '<svg><symbol id="icon-yanzhengma" viewBox="0 0 1024 1024"><path d="M895.744 273.28a59.2 59.2 0 0 0-46.72-51.936A1103.36 1103.36 0 0 1 697.92 186.56a561.28 561.28 0 0 1-135.008-78.912 61.76 61.76 0 0 0-72.16 0 354.112 354.112 0 0 1-136.032 78.4 507.264 507.264 0 0 1-146.944 36.32 55.04 55.04 0 0 0-46.208 51.936S160 404.64 160 519.36C160 727.04 405.056 928 527.616 928c122.528 0 330.24-141.76 363.456-405.504 8.32-155.776 2.56-248.704 2.56-248.704l2.112-0.544z m-133.44 160.416l-256 241.44c-11.52 10.976-29.12 12.704-42.56 4.16l-6.72-5.728-141.248-146.912a35.264 35.264 0 0 1 51.904-47.776l116.32 122.016 230.528-218.08a35.264 35.264 0 1 1 47.776 51.936v-1.056z"  ></path></symbol><symbol id="icon-account_pwd" viewBox="0 0 1024 1024"><path d="M512 1024c282.768 0 512-229.232 512-512C1024 229.232 794.768 0 512 0 229.232 0 0 229.232 0 512c0 282.768 229.232 512 512 512z m-2.752-800c39.92-0.064 78.384 15.568 107.568 43.744 29.456 29.504 45.76 70.336 45.04 112.736v8.144c-2.352 10.88-11.68 18.592-22.448 18.592s-20.096-7.728-22.448-18.592v-8.272c0-62.08-46.944-108.864-109.216-108.864-63.92 0-114 47.472-114 108.512v42.4h258.944c54.816 0.16 99.2 46.112 99.312 102.832v172c-0.112 56.72-44.512 102.656-99.312 102.768H371.36c-54.816-0.112-99.232-46.048-99.376-102.768v-172c0.112-47.552 31.904-88.736 76.704-99.36V380c-0.208-43.024 17.44-84.064 48.448-112.72A162.784 162.784 0 0 1 507.2 224z m2.88 278.096h-0.32c-42.8 0.848-78.56 33.92-84.16 77.824-5.6 43.904 20.688 85.44 61.808 97.712v35.008c1.28 6.16 4.896 11.52 10.016 14.912a22.08 22.08 0 0 0 17.248 3.264c8.96-1.952 15.952-9.184 17.824-18.448V677.44c40.8-12.544 66.752-53.92 61.168-97.584-5.584-43.664-41.024-76.64-83.584-77.76z m-0.256 46.464c22.8-0.112 41.392 18.928 41.488 42.528l-0.064 0.272a43.504 43.504 0 0 1-12.048 30.24 40.608 40.608 0 0 1-29.184 12.56c-22.784 0-41.264-19.088-41.296-42.672-0.112-23.6 18.288-42.816 41.104-42.928z"  ></path></symbol></svg>',
    d = (d = document.getElementsByTagName('script'))[
      d.length - 1
    ].getAttribute('data-injectcss'),
    l = function (e, t) {
      t.parentNode.insertBefore(e, t)
    }
  if (d && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
      )
    } catch (e) {
      console && console.log(e)
    }
  }
  function s() {
    i || ((i = !0), c())
  }
  function m() {
    try {
      o.documentElement.doScroll('left')
    } catch (e) {
      return void setTimeout(m, 50)
    }
    s()
  }
  ;(t = function () {
    var e,
      t = document.createElement('div')
    ;(t.innerHTML = a),
      (a = null),
      (t = t.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        // eslint-disable-next-line no-self-assign
        (t = t),
        (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t()
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((c = t),
        (o = e.document),
        (i = !1),
        m(),
        (o.onreadystatechange = function () {
          'complete' == o.readyState && ((o.onreadystatechange = null), s())
        }))
})(window)
