# Blog Comments

The `<textarea>` is used for bigger chunks of text that normally take up more than only line.

An example of this would be the Comments box:

```
<form action="/comments" method="POST">
	<textarea name="comment" id="comment" cols="45" rows="8"></textarea>
	<input type="submit" name="submit" value="Post Comment">
	<input type="hidden" name="comment_article_ID" value="2741">
</form>
```

> Have a look at the example above. What do you think the **cols** and **rows** attributes are for?
And what do you think the **hidden** input filed does?

## Have a go!

Shock, horror! The first article has been published in the CodeYourFuture blog, but we have no comments form!

We'll need to have a break from the CodeYourFuture checkout to sort it out.

1. Open exercise 3's `index.html` and add a `form` tag where it says `<!-- Your comment form goes here -->`.

2. Add a `textarea`. Play around with the textarea columns and rows and see how it changes!

3. Add a `label` so that users know what it is for.

3. Add a Submit button.
