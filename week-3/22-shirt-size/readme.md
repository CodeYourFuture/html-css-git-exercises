# T-Shirt Size

Notes: change the instructions to reflect shirt sizes and replacing the size in the checkout

The `<select>` field is used for a dropdown list. Each of the items on the list is defined by an `<option>` field.

An example of this could be a choice of size for an online shop checkout:

```
<form action="/product" method="POST">
	<select id="native_dropdown_selected_size" name="dropdown_selected_size">
		<option value="-1">Please select your shoe size</option>
		<option value="3">3</option>
		<option value="4">4</option>
		<option value="5" selected>5</option>
		<option value="6">6</option>
	</select>
</form>
```

> What do you think the **selected** attribute does?
