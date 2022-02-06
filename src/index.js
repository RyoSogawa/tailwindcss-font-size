const plugin = require('tailwindcss/plugin')

const fontSize = plugin.withOptions(function (
  options = { baseSize: 16, minSize: 10, maxSize: 128 }
) {
  return function ({ addUtilities, e }) {
    const { baseSize, minSize, maxSize } = options

    const length = maxSize - minSize + 1

    const rems = Object.fromEntries(
      [...Array(length)].map((_, index) => {
        const px = index + minSize
        const className = `fsz-${px}ptr`
        return ['.' + e(className), { 'font-size': `${px / baseSize}rem` }]
      })
    )

    const pxs = Object.fromEntries(
      [...Array(length)].map((_, index) => {
        const px = index + minSize
        const className = `fsz-${px}px`
        return ['.' + e(className), { 'font-size': `${px}px` }]
      })
    )

    addUtilities([rems, pxs])
  }
})

module.exports = fontSize
