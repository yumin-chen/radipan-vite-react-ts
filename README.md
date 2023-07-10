# radipan-vite-react-ts
This is a starter for [Radipan](https://github.com/yumin-chen/radipan), a CSS-in-JS engine that lets you style your components with ease.

## Getting started

To create a component with Radipan, you can use the `radipan` function and pass in the element type as an argument. For example:

```javascript
radipan('div').create({ css: { color: 'red' } }, 'whee!')); // Red whee!
```

This returns a Creatable object that has a create method. You can use this method to specify the props and children of your component.

When you run `npx radipan cssgen`, it will parse all `css` props and generate the CSS code statically during build time according to your [radipan.config.ts](/radipan.config.ts).
