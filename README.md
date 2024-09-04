# Reproduce Svelte $host() rune bug

This is a reproduction of the bug of Svelte's $host() rune:

If you assign $host() to a variable, the assignment statement will be removed after compilation.

## source

[MyElement.svelte](./src/MyElement.svelte)

```ts
function fail(greeting: string) {
  const element = $host() as HTMLElement;
  element.dispatchEvent(
  new CustomEvent('greeting', { detail: greeting })
  );
}
```

## after compilation

[components.iife.js](./dist/components.iife.js)

```js
function fail(greeting) {
  element.dispatchEvent(new CustomEvent("greeting", { detail: greeting }));
}
```

Which will throw `ReferenceError: element is not defined` in runtime.
