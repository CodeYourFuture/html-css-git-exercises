# T-Shirt Size

The `<select>` field is used when you want the user to choose an option but you can not show all of the options at once. In this excercise, you will use the `<select>` field to let the user change the size of the t-shirt they want to order. Follow the steps below to complete this exercise.

1. Find the table cell where the t-shirt size is mentioned. _Hint: It is "Medium"._
2. Replace the t-shirt size with a form that includes one `<select>` field with the following options: Small, Medium, Large.
3. Use the `selected` attribute to make the Medium option selected by default.

When you are done, it should look like the image below.

![Screenshot of the size selection](/images/25/solution-1.png)

It looks like you don't need the label "Choose a size". The table already tells us this column is for "Size". However, users who can not see use assistive technology to browse the web. This technology is often called a "screen reader". It reads what is on the screen for them. These tools do not work for forms unless _every_ field has a label.

In this case, we need to keep the label in the HTML code, but we want to hide it to sighted users. The following CSS code can do that.

```
.screenreader {
	clip: rect(1px, 1px, 1px, 1px);
	position: absolute !important;
	left: -2000px;
}
```

_Hint: You may have heard of `display: none`. This will also hide an element. However, using this property will hide it for screen readers too! We must use the CSS code above to hide something visually without hiding it from screen readers._

Follow the steps below.

1. Add the CSS code above to the `styles.css` file.
2. Use the class name to hide the label without removing it from the HTML code.

When you are done, it should look like the image below -- _but the `<label>` should still be in the HTML code._

![Screenshot of the hidden label](/images/25/solution-2.png)
