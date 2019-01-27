# Checkout Groups - Fieldset

In [exercise 21](/week-3/21-dietary), you used `<fieldset>` and `<legend>` to group checkboxes together. In this exercise, you will use these tags to describe a group of fields that are related to each other.

To send the t-shirt to your customer you need to know where they want it to be delivered. This may be different from the address on the card they use to make payment. In this exercise, you will create two groups of fields: one for the billing address and one for the delivery address.

1. Find the line in the `index.html` page where it says `<!-- Add the form fields here -->`.
2. Below this line, add a `<fieldset>` with a `<legend>` that says "Billing Address".
3. Add text input fields nested inside of the `<fieldset>`. Add fields for the following: Address Line 1, Address Line 2, Postcode and City.
4. Repeat steps 2 and 3 for a set of fields named "Delivery Address".

_Hint: Every field needs a unique `name` attribute. You can't have two fields named `postcode`, so you will need to name each set differently._

When you are done, it should look like this.

![Screenshot of the billing and delivery address fieldsets](/images/26/solution.png)
