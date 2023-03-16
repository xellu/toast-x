# Toast X
### JavaScript library for Toast messages, Alerts and Actionbars


# Getting Started
Installing Toast-X
```html
<script src="https://xello.blue/toastx.js" defer></script>
```
You can also import [Animate.css](<https://animate.style/>) for animations, use the following code:
```html
<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
  <script src="https://xello.blue/toastx.js" defer></script>
</head>
```

# Features
## 1. Toast Messages
To display a toast message, use the following code:

```js
toast('Hello, world!');
```

You can also customize the color of the toast message and the time it appears on the screen (in seconds) using the optional arguments:
```js
toast('Hello, world!', 'green', 3);
```

## 2. Alerts
To display an alert box, use the following code:

```js
alertBox('Warning!', 'This is a warning message.');
```
You can customize the title and message of the alert box.

## 3. Actionbars
To display an actionbar, use the following code:
```js
actionBar('Please wait...', 5);
```
You can customize the message of the actionbar and the time it appears on the screen (in seconds) using the optional argument.

# Example
Here's an example of how to use Toast X in your website or application:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Toast X Example</title>
	<script src="https://xello.blue/toastx.js" defer></script>
</head>
<body>
	<h1>Toast X Example</h1>
	<button onclick="toast('Hello, world!', 'green', 5)">Display Toast</button>
	<button onclick="alertBox('Warning!', 'This is a warning message.')">Display Alert</button>
	<button onclick="actionBar('Please wait...', 3)">Display Actionbar</button>
</body>
</html>
```

This code will display three buttons that, when clicked, will display a toast message, an alert box, and an actionbar, respectively.
