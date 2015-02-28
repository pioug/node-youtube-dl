# node-youtube-dl
**Node module for [youtube-dl](http://rg3.github.io/youtube-dl/)**

```js
var require('node-youtube-dl');

youtubeDl
  .getJSON('https://www.youtube.com/watch?v=fqas446dwiU')
  .then(function(response) {
    console.log(response);
  })
```

## Documentation

All methods are returning *promise*.

### getJSON(url)
*Equivalent to `youtube-dl --dump-json URL`*

Returns JSON information about the video that can be found at `url`.

### getVersion()
*Equivalent to `youtube-dl --version`*

Returns version of `youtube-dl`.

### execute(arguments)
*Equivalent to `youtube-dl ARGUMENTS`*

Execute `youtube-dl` with the specified `arguments` and returns `stdout` or `stderr`.


## Going further

For more details, see the [original documentation of youtube-dl](https://github.com/rg3/youtube-dl/blob/master/README.md#readme).

For a better node module, check [fent/node-youtube-dl](https://github.com/fent/node-youtube-dl).
