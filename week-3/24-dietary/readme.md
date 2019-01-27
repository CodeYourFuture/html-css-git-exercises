# Dietary Requirements

When using the `checkbox` or `radio` input types, you often need to group the options together. In this exercise, you will use a `<fieldset>` and `<legend>` to describe a group of options. Follow the steps below to complete this exercise.

1. Add a `checkbox` input with a `<label>` for each of the following dietary requirements: Halal, Kosher, Vegetarian, Vegan, Gluten Free.
2. Add a `<fieldset>` with a `<legend>` to describe all of the fields. The legend should say "Please select all of your dietary requirements".

When you are done, it should look like the image below.

![Screenshot of the dietary needs after the first steps](/images/24/solution-1.png)

If you have used the `for` and `id` attributes properly, you should be able to click on the name of each dietary requirement to check that box.

_Hint: If you click on one dietary requirement and it checks a different box, you may have used an `id` more than once. Each `id` on the page has to be unique._

You may notice, however, that there is a small space between the checkbox and the label where you can click and the checkbox will not be changed. This can be frustrating for users. In this case, you can nest the checkbox _inside_ of your label.

```
<label>
	<input type="checkbox" name="dietary">
	Halal
</label>
```

When `<input>` field is nested inside of a `<label>`, you don't have to use the `id` and `for` attributes. Follow the steps below.

1. Change your code so that each `<input>` is nested inside of a `<label>`.

When you're done, it should look exactly the same except that when you click on the gap between the checkbox and the text it still checks the box.

## Extra Credit

Can you make each item appear on it's own line like the image below?

![Screenshot of the dietary needs with each item on its own line](/images/24/solution-2.png)
