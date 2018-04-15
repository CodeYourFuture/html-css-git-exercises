# Parent-Child Relationships

There are two messages in this example. The time that the message was sent is displayed for the first message, but it is missing in the second message. Complete the following steps:

1. Open the `index.html` file and add the time `7:15pm` to the second message using the correct HTML syntax. You will need to identify the correct location in the code to add a new tag and make sure that you give it the correct class attribute.
2. When you have finished, ask a mentor to check your work.
3. When a mentor has told you it's correct, you must use git to add, commit and push your changes.

```
git add .
git commit -m "Completed 1-parent-child exercise"
git push
```

_Hint: Use the first message as an example to help you write the second message correctly._

If you are having trouble, review the following information about HTML tags and parent-child relationships.

## HTML Syntax

You're already familiar with HTML code from your application process. If you want to refresh your memory, read this [quick guide to the HTML syntax](http://marksheet.io/html-syntax.html).

Let's review parent-child relationships in the following example.

```html
<article class="message">
	<div class="message__author">Anthony</div>
	<p class="message__content">Who is available to meet this week to work on our group project?</p>
	<span class="message__time">6:48pm</span>
</article>
```

First, we start with an empty _parent_ tag:

```html
<article class="message"></article>
```

Now we add a _child_ tag:

```html
<article class="message">
	<div class="message__author">Anthony</div>
</article>
```

The `<div>` tag is a _child_ of the `<article>` tag because is starts _after_ `<article>` and ends _before_ `</article>`.

Add another _child_ tag:

```html
<article class="message">
	<div class="message__author">Anthony</div>
	<p class="message__content">Who is available to meet this week to work on our group project?</p>
</article>
```

The `<p>` tag is also a _child_ of the `<article>` tag. Since the `<div>` and `<p>` tags share the same _parent_, we call them "sibling" tags, like brothers and sisters.

## Did you finish?

When you're done, move on to the next exercise.
