```javascript
var isSHA256zbase32 = require('is-sha256-zbase32')

require('assert')(
  isSHA256zbase32(
    require('zbase32').encode(
      require('crypto')
      .createHash('sha256')
      .update('some text', 'utf-8')
      .digest()
    )
  )
)
```
