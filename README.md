# yulelog
Inspired by [@ChloeCondon's Tweet](https://twitter.com/ChloeCondon/status/1338870823004749825). Bring some Christmas Emoji to your logging!

## Functionality

If the current month is December and the date is on or before the 25th a festive emoji will be added to your `console.log` messages.
```
> new Date()
2020-12-17T15:43:49.638Z
> console.log("Merry, Christmas!");
Merry, Christmas!
undefined
> require('yulelog')
{ log: [Function: yuleLog] }
> console.log("Merry, Christmas!");
🌟: Merry, Christmas!
undefined
> 
```

You can get year round cheer by using the `log` function exported from this package.

```
const yuleLog = require('yulelog');

yuleLog.log('Hello')

// 🍪: hello
```

## Should I use this in production?

Emphatically, yes.
