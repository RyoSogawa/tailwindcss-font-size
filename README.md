# tailwindcss-font-size

A plugin that provides utilities for font-size by 'px' and 'rem'.

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
Use the `fsz-{n}px` or `fsz-{n}r` utilities to set font-size.
`px` is for pixel, `r` is for root font-size.

```html
<p class="fsz-18px">This font size is 18px</p>
<p class="fsz-18r">This font size is 1.125rem (if base font size is 16px)</p>
```

## Configuration
You can configure the plugin by passing options to its constructor.
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

