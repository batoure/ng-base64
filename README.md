# Angular [Base64](https://en.wikipedia.org/wiki/Base64)
An angular factory implementation of the javascript base64 algorithm as proposed by [ncerminara](https://github.com/ncerminara)

You can view the original gist [here](https://gist.github.com/ncerminara/11257943#file-base64-js])

# Usage
Add a reference to angular-base64.js in your html:

```html
 <script src="<PATH>/angular-base64.js" type="text/javascript"></script>
```

Add a reference to ngBase64 in angular application config section:

```javascript
	var myApp = angular.module('myApp',
		[
    		'ngBase64'
		]);   
```

Inject base64 into a controller or directive in your application:

```javascript
	.controller('AppCtrl', function($log, base64) {
		$log.log(base64.encode('Hello World!'));
		$log.log(base64.decode('SGVsbG8gV29ybGQh'));
	})
```

Enjoy!