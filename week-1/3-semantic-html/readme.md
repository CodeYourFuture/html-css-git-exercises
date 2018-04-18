# Semantic HTML

There are no semantic tags or attributes being used in the messages for this example. Let's improve it by changing the tags and attributes to semantic HTML code, so that computers can understand what kind of information is being presented. Complete the following steps:

1. Replace an existing tag with the `<header>` tag to specify the site's header area.
2. Add the `role="main"` attribute to an existing element to specify the main content on the site.
3. Replace existing tags with the `<article>` tag to group information relating to a single message.
4. Extra challenge: use the `<time>` tag with the `datetime=""` attribute to specify the time of each message.

_Hint: To complete this exercise, you should modify the HTML elements that are already there. You don't need to create any new elements._

If you are having trouble, review the following information about semantic HTML code.

## What is semantic HTML code?

"Semantic HTML is the use of HTML markup to reinforce the semantics, or **meaning**, of the information in webpages and web applications rather than merely to define its presentation or look." [Wikipedia](https://en.wikipedia.org/wiki/Semantic_HTML)

We use specific _tags_ and _attributes_ in our HTML code to identify what kind of information is being presented.

### <header> and <footer>

At the top of most websites, you will find a logo and a navigation menu. No matter what page we visit on the site, this logo and navigation menu will stay the same. This is what the header looks like on [GitHub](https://github.com).

![Screenshot of GitHub.com with header indicated](/images/3-header.png)

We use the `<header>` tag to identify this part of a website.

```
<header>
	<img src="/logo.png">
	<nav>
		<a href="/">Home</a>
		<a href="/">News</a>
		<a href="/">About</a>
	</nav>
</header>
```

At the bottom of most websites, you will often find additional information, such as links to other pages on the site and contact details. We use the `<footer>` tag to identify this part of a website.

```
<footer>
	<a href="/">Contact Us</a>
	<p>© CodeYourFuture, 2018</p>
</footer>
```

### <nav>

Most websites include a navigation menu, which contains links to the _main sections_ of the website. We use the `<nav>` tag to identify the website's general navigation menu.

```
<nav>
	<a href="/">Home</a>
	<a href="/">News</a>
	<a href="/">About</a>
</nav>
```

### role="main"

Most pages on a website have a section which is the main purpose of that page. On the BBC's website, the article is the main content on each article page.

![Screenshot of BBC article with main section indicated](/images/3-main.png)

The other articles on the right are not part of the main article, so we use the `role="main"` attribute to identify the main section on the page.

```
<div role="main">
	<h1>Learn how to write HTML</h1>
	<p>This course teaches you how to write HTML code.</p>
	<p>Start out with tags, then try attributes.</p>
</div>
<div class="side-bar">
	<h2>Top Stories</h2>
	<a href="/">Man Bites Dog</a>
	<a href="/">Cat Stuck in Tree</a>
</div>
```

### <article>

Information on a website is usually grouped together. For example, a single article may contain a title, author and description. A message might contain the sender, the message, and the time it was sent.

We use the `<article>` tag to identify separate tags that should be grouped together. The `<article>` tag is used as a _parent_, which identifies all of its _children_ as related to each other.

```
<div role="main">
	<article>
		<h1>Learn how to write HTML</h1>
		<p>This course teaches you how to write HTML code.</p>
		<p>Start out with tags, then try attributes.</p>
	</article>
</div>
<div class="side-bar">
	<h2>Top Stories</h2>
	<article>
		<h3>Man bites dog</h3>
		<p>Dog in hospital after attack by brutal, untrained man.</p>
		<a href="/">Read More</a>
	</article>
	<article>
		<h3>Cat stuck in tree</h3>
		<p>"Not coming down," says cat.</p>
		<a href="/">Read More</a>
	</article>
</div>
```

### Other semantic HTML tags and attributes

Want to learn more? Read about these semantic HTL tags and attributes:

- [`<aside role="complementary">`](http://html5doctor.com/understanding-aside/)
- [`<time datetime="2017-04-13 06:23"`](https://css-tricks.com/time-element/)
- [`<address>`](http://html5doctor.com/the-address-element/)
- [`<abbr>`](http://html5doctor.com/the-abbr-element/)
- [`<blockquote>`](http://html5doctor.com/blockquote-q-cite/)
