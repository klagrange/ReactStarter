import { css } from 'styled-components'

const sizes = {
  desktop: 1279,
  tablet: 991,
  mobile: 767
}

export const deviceType = {
  giant: function () { return window.innerWidth > 1279 },
  desktop: function () { return window.innerWidth > 991 && window.innerWidth < 1280 }, // desktop === tablet landscape
  tablet: function () { return window.innerWidth > 767 && window.innerWidth < 992 }, // tablet portrait
  mobile: function () { return window.innerWidth < 768 }
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export const isIE11 = () => (
  navigator.userAgent.indexOf('MSIE') !== -1 ||
  navigator.appVersion.indexOf('Trident/') > 0)

export const isSafari = () =>
  navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1

export const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1

export const isIE11OrSafari = () => isIE11() || isSafari()

export const isWindows = () => navigator.appVersion.indexOf('Win') !== -1
