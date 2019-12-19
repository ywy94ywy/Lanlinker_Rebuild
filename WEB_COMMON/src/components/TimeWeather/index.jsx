/**
 * @module 心知天气
 */
import { useState, useEffect } from 'react'
import moment from 'moment'
import { Icon } from 'antd'
import style from './index.less'

export default () => {
  const [calendar, setCalendar] = useState(new Date())

  useEffect(() => {
    ;(function(a, h, g, f, e, d, c, b) {
      b = function() {
        d = h.createElement(g)
        c = h.getElementsByTagName(g)[0]
        d.src = e
        d.charset = 'utf-8'
        d.async = 1
        c.parentNode.insertBefore(d, c)
      }
      a['SeniverseWeatherWidgetObject'] = f
      a[f] ||
        (a[f] = function() {
          ;(a[f].q = a[f].q || []).push(arguments)
        })
      a[f].l = +new Date()
      if (a.attachEvent) {
        a.attachEvent('onload', b)
      } else {
        a.addEventListener('load', b, false)
      }
    })(
      window,
      document,
      'script',
      'SeniverseWeatherWidget',
      '//cdn.sencdn.com/widget2/static/js/bundle.js?t=' +
        parseInt((new Date().getTime() / 100000000).toString(), 10),
    )
  }, [])

  useEffect(() => {
    // 心知天气服务
    window.SeniverseWeatherWidget('show', {
      flavor: 'slim',
      location: 'WTW3SJ5ZBJUY',
      geolocation: true,
      language: 'zh-Hans',
      unit: 'c',
      theme: 'dark',
      token: 'd541121a-748b-4b47-82cf-e73f928f9766',
      hover: 'enabled',
      container: 'tp-weather-widget',
    })

    // 日期
    const timeout = setTimeout(() => {
      setCalendar(new Date())
    }, 500)
    return () => {
      clearTimeout(timeout)
    }
  })

  const date = moment(calendar)
  const week = date.format('ddd')
  const day = date.format('YYYY年MM月DD日')
  const time = date.format('hh:mm:ss')

  return (
    <div className={style.timeWeather}>
      <div className={style.wrapper}>
        <div className={style.iconWrapper}>
          <Icon type='schedule' />
          <span>{week}</span>
          <span>{day}</span>
        </div>
        <div className={style.iconWrapper}>
          <Icon type='clock-circle' />
          <span>{time}</span>
        </div>
        <div className={style.iconWrapper}>
          <Icon type='environment' />
          <div id='tp-weather-widget' className={style.weather}></div>
        </div>
      </div>
    </div>
  )
}
