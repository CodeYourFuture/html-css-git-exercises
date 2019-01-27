# Form Labels

Labels are used to tell the user what data they are expected to enter into a form field. In our last exercise, we built a search form. But how will the user know what they are expected to do? You need to make the form more "user-friendly".

In this exercise, you will add a label to the search field. Follow the steps below to add a label and connect it to your search field.

1. Add a `<label>` above the `<input>` field. The text in this element should be `Search on Google`.
2. Add an `id` attribute to the `<input>` field. The `id` should be `search-input`.
3. Connect the `<label>` to the `<input>` field by adding a `for` attribute to the `<label>`. The `for` attribute should match the `id` of the `<input>`.

If you have done this correctly, you should see "Search on Google" appear above the label. When you click "Search on Google", it should move your focus to the search field.
