[Broken Promises - James Snell, NearForm - YouTube](https://www.youtube.com/watch?v=XV-u_Ow47s0) 


During this training, we'll do this command to trace async event

```bash
node --trace-event-categories=v8,async_hooks code.js
```

## First example

```js
// When is javascript running?
setInterval(() => {
  for (var n = 0; n < 1e9; n++) {}
  console.log('test');
}, 500)
```
