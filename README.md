# tailwindcss-font-size
[![npm version](https://badge.fury.io/js/tailwindcss-font-size.svg)](http://badge.fury.io/js/tailwindcss-font-size)
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

A plugin that provides utilities for font-size by `px` and `rem` ( **px to rem** ).

[demo(playground)](https://codesandbox.io/s/tailwindcss-font-size-3ixwv?file=/public/index.html)

Deference between TailwindCSS's JIT(Just in Time) is that this plugin calculates the rem font-size based on the font-size of the root element.
```html
<!-- TailwindCSS JIT -->
<p class="text-[22px]">Good</p>
<p class="text-[1.375rem]">🧮 Needs Calculation...</p>

<!-- This Plugin -->
<p class="fsz-22px">Good</p>
<p class="fsz-22ptr">🤓 No Calculation is Needed</p>
```

## Installation
Install the plugin from npm:
```
# Using npm
npm install tailwindcss-font-size

# Using Yarn
yarn add tailwindcss-font-size
```

Then add the plugin to your `tailwind.config.js` file:
```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-font-size'),
    // ...
  ],
}
```

## Usage
Use the `fsz-{n}px` or `fsz-{n}ptr` utilities to set font-size.
`px` is for pixel, `ptr` is for rem ( px to rem ).

```html
<p class="fsz-32px">This font size is 32px</p>
<p class="fsz-32ptr">This font size is 2rem (if option.baseSize is 16px)</p>
```

## Configuration
You can configure the plugin by passing options to its constructor.

Parameters and default values are below.
```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-font-size')({ 
      baseSize: 16, // html font-size
      minSize: 10,
      maxSize: 128 
    }),
    // ...
  ],
}
```

## Contribution
Please feel free to open an issue or make a pull request.

## License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
