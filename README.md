# vResponse.js v1.0
vResponse.js is a tiny simple jQuery plugin that makes it possible to create vertical responsive divisions.

## Requirements
- [jQuery 1.11.0+] (http://jquery.com/download/)

## Demo
- [See Demo] (http://zargaripour.com/demo/vResponse.js/)

## Usage
### 1. Download vResponse.js
- [Download the compressed, production vResponse.js v1.0] (https://raw.githubusercontent.com/zargaripour/vResponse.js/master/vResponse.min.js)
- [Download the uncompressed, development vResponse.js v1.0] (https://raw.githubusercontent.com/zargaripour/vResponse.js/master/vResponse.js)
- [Download full release package] (https://github.com/zargaripour/vResponse.js/releases)

### 2. Include jQuery & vResponse.js on your site
```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="vResponse.min.js"></script>
```

### 3. Add trigger in a division by `data-toggle="vResponse"`
```html
<div class="main" data-toggle="vResponse"></div>
```

### 4. Activate vResponse.js
#### You have three methods to Activating vResponse.js
###### Activate vResponse.js after page loading (once)
```javascript
$(function() {$('[data-toggle="vResponse"]').vResponse();});
```
###### Activate vResponse.js after every resizing moment of browser
```javascript
$(window).resize(function(){$('[data-toggle="vResponse"]').vResponse();});
```
###### Activate vResponse.js after page loading & every resizing moment of browser
```javascript
$(function() {$('[data-toggle="vResponse"]').vResponse();});
$(window).resize(function(){$('[data-toggle="vResponse"]').vResponse();});
```
### 5. Set animation speed (optional)
###### Put integer value in vResponse() as an argument.

Example (750 milliseconds): 
```javascript
$(function() {$('[data-toggle="vResponse"]').vResponse(750);});
```
