# Field Attributes

You have all of the fields you need. But what if someone submits the form without filling anything out? What if you only delivery to the United Kingdom?

In this exercise, you will add attributes to your form to make some fields required or disabled, prevent input in some fields, and provide default values so that users don't have to fill out extra fields. Follow the steps below to complete this exercise.

1. Every address requires at least Address Line 1, Postcode and the City. Add the `required` attribute to these input fields so that the form can not be submitted without them.
2. Your company only delivers to the UK, so you should enter this information for the user. Find the Country field in the Delivery Address. Add a `value` attribute of "United Kingdom" so that the form loads with the field already completed.
3. You still need to prevent the user from changing the Country after it's loaded. Add a `readonly` attribute to this field so that the user can not change it.
4. For this product, however, you only offer one delivery option. Since this is the only option, check this option for the user and disable the field so that they can't change it. Add a `checked` attribute to the field in order to check the field for the user. Add a `disabled` attribute to the field in order prevent the user from changing it.

When you are done, you should see an error message like below when you try to submit without completing one of the required fields.

![Screenshot of the required checkout fields](/images/27/solution-required.gif)

You should not be able to type anything in the Country field. And the delivery options should look like this.

![Screenshot of the disabled delivery options](/images/27/solution-delivery.png)

**Extra Credit**

What's the difference between `readonly` and `disabled`? See if you can understand this [question and answer](https://stackoverflow.com/questions/7730695/whats-the-difference-between-disabled-disabled-and-readonly-readonly-for-ht).
