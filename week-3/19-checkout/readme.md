# Checkout Form

Notes:
- combines 1/2 from carme's exercises.
- write a bit of JS to check for correct labels

## Exercise 1

We have seen how to create an `<input type="text">` field. Use what you have learned to start creating the **Check Out** for the CodeYourFuture shop.

Please notice that, because the data entered on this form is going to be used and stored by the server, we will need to use set the `method="POST"` instead of `GET`.

1. Open `index.html` and add a form tag where it says `<!-- Your new form goes here -->`.

2. Add an input field to the form for the customer's first name. What type of input field will we need?

3. Add a second field for the customer's surname.

4. Add another field for the customer's email.

5. Add an input field for the customer's contact telephone number.

6. Finally, add the Submit button at the end of the form.


## Exercise 2

With the HTML tags we have seen so far, we can build a fully functioning form. We now need to make it user-friendly.

For this, we will add a **label** for each field:

`<label for="target-id">Some text here</label>`

Labels are used to tell the user what data they are expected to enter in that field. The value of the `for` attribute is the `id` of the field to which the label makes reference. For example:

```
<form method="POST" action="/checkout">
	<label for="first-name">First Name:</label>
	<input type="text" name="first-name" id="first-name">
	<input type="submit" value="Submit">
</form>
```

The `label` in the example above is linked to the `input` field with id `first-name`.

To the user it will look like this:

![Form example](../../img/form-example-1.png)

### Have a go!

The form from exercise 1 works well but it is not user friendly. How does anyone know what they are supposed to enter in each field?

1. Open exercise 2's `index.html` and add the form you created in [exercise 1](../1-input-fields/index.html) where it says `<!-- Your exercise 1 form goes here -->`.

2. Add a label to all the input fields that need one.

3. (Optional) Make the form easier to read by displaying each label+input pair in its own line. There are several ways of achieving this, how would you do it? Have a think before Google-ing it!
