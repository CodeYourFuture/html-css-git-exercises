# Checkout Groups - Fieldset

Note: fieldset has been used in checkboxes, so update text to reflect it's already been mentioned, but this is a different usecase.

The `<fieldset>` element is used to group together other form elements that are expected to be "related" to each other.

A `<fieldset>` element is normally by a `<legend>` element that provides a brief description for the grouping.

An example of this would be, in an online shop checkout, separating the delivery address fields and cardholder address fields onto two different fieldsets.

```
<form method="POST" action="/checkout">
	<fieldset name="cardholder-address">
		<legend>Cardholder address:</legend>
		<label for="cardholder-address-1">Address line 1:</label>
		<input type="text" id="cardholder-address-1" name="cardholder-address1" value required>
		<label for="cardholder-address-2">Address line 2:</label>
		<input type="text" id="cardholder-address-2" name="cardholder-address2" value>
		<label for="cardholder-postcode">Postcode:</label>
		<input type="text" id="cardholder-postcode" name="cardholder-postcode" value required>
		<label for="cardholder-town">Town:</label>
		<input type="text" id="cardholder-town" name="cardholder-town" value required>
	</fieldset>

	<fieldset name="delivery-address">
		<legend>Delivery address:</legend>
		<label for="delivery-address-1">Address line 1:</label>
		<input type="text" id="delivery-address-1" name="delivery-address1" value required>
		<label for="delivery-address-2">Address line 2:</label>
		<input type="text" id="delivery-address-2" name="delivery-address2" value>
		<label for="delivery-postcode">Postcode:</label>
		<input type="text" id="delivery-postcode" name="delivery-postcode" value required>
		<label for="delivery-town">Town:</label>
		<input type="text" id="delivery-town" name="delivery-town" value required>
	</fieldset>

	<input type="submit" value="Submit">
</form>
```

The above example would look like this:

![Fieldset example](../../img/fieldset-example.png)
