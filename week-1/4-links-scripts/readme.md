# Adding Links and Scripts

This site is missing the CSS styles. It's also missing JavaScript code that will convert the URLs ("http://") into links that can be clicked.

Your colleagues have already written the .css and .js files. Complete the following steps to get this site working:

1. Add a `<link>` element that includes the `missing-styles.css` file in this exercise's directory. This should be placed in the `<head>` element.
2. Add a `<script>` element that includes the `convertUrls.js` file in this exercise's directory. This should be placed at the end of the `<body>` element.
3. When you are finished, use git to add, commit and push your changes.

_Hint: When you are done, the messages should have the colours and layout like other exercises, and you should be able to click on the URLs ("http://") to go to them._

If you are having trouble, review the following information about including resources into an HTML page.

## Separation of Concerns

When building applications for the web, we separate content, presentation and behaviour.

- **Content** is the raw material of the website. It may be an article, a message, a video, or a list of links.
- **Presentation** is the way that material is displayed. It controls the colours, typography and layout of the content.
- **Behaviour** is anything that reacts to what the user does. When you type a message on Facebook and hit Send, the website is reacting to your behaviour.

To keep our projects organised, we separate these concerns and store them in different files. The content is written in HTML code and saved in .html files. The presentation is written in CSS code and saved in .css files. The behaviour is written in JavaScript code and saved in .js files.

## Linking a CSS file

HTML allows us to link a CSS file, so that we can apply presentation styles to our raw content. We use the `<link>` tag to do this:

```
<link rel="stylesheet" href="style.css">
```

This example has two attributes. The `rel` attribute indicates that our link is to a "stylesheet", a common name for a .css file. The `href` attribute points to the file.

This `<link>` tag goes into the `<head>` element of our HTML page:

```
<html>
	<head>
		<title>Example Page</title>
		<link rel="stylesheet" href="style.css">
	</head>
	<body>
		<p>My page content.</p>
	</body>
</html>
```

## Linking a JavaScript file

HTML allows us to link a JavaScript file, so that we can react when viewers do something on our website. We use the `<script>` tag to do this:

```
<script src="postMessage.js"></script>
```

This example has one attribute. The `src` attribute points to the file.

Usually, the `<script>` tag appears near the end of the `<body>` element of our HTML page:

```
<html>
	<head>
		<title>Example Page</title>
	</head>
	<body>
		<p>All of my page content.</p>
		<script src="postMessage.js"></script>
	</body>
</html>
```

## Linking to the right file location

When linking a CSS or JavaScript file, you must provide the correct path to the file. In this exercise, `missing-styles.css` is placed inside of a directory called `css`. Your `<link>` must point to the file inside of that directory:

```
<link rel="stylesheet" href="css/missing-styles.css">
```

Want to learn more? Read about [Relative Links](https://marksheet.io/html-links.html#relative-urls), [Absolute Links](https://marksheet.io/html-links.html#absolute-urls), and [how to choose the right one](https://marksheet.io/html-links.html#relative-or-absolute-links).
