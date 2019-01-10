# Combined Skills

There are many problems to solve on a real website. Sometimes a simple change can be difficult because it is hard to find which part of the code you need to change.

In this exercise, you will work on many different problems on the same website. When you fix one problem you will need to make sure you have not broken a different part of the site.

Everything you do in this exercise will be something you _know how to do_, but it will probably take you longer to do it. Tasks that seemed simple in a previous exercise will seem more challenging.

To complete this exercise, follow the steps in each section below. When you complete a section, check the site to make sure it looks like you expect.

_To complete these exercises you should only modify `about.html`, `contact.html`, `index.html` and `styles.css`._

## 1. Made with ♥

At the bottom of the website, you will find the text "Built with ♥ for CodeYourFuture". It would be fun to make the ♥ appear in red (`#c85308`).

To complete this exercise, follow the steps below.

1. Read [this documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span) about the `<span>` tag.
2. Use a `<span>` tag to make the ♥ -- and only the ♥ -- appear in red (`#c85308`).

When you have done this, the text should look like the image below.

![Screenshot of the red heart solution](/images/29-solution-heart.png)

## 2. Semantic HTML

A few semantic tags are missing from the HTML files in this exercise. To complete this exercise, follow the steps below.

1. Use the `<nav>`, `<header>` and `<article>` tags where appropriate.
2. Try to use the `<time>` tag with the correct attribute.

_Hint: You will have to replace existing elements in the HTML code._

## 3. Hero Text Size

The large image on the main page, with the title "Duis aute irure dolor in reprehenderit in voluptate velit", is called a "Hero" component. It is commonly used to draw attention to the most important item on the page.

On wide screens, the title of the Hero component is too small. Make this bigger so it draws more attention from the user.

To complete this exercise, follow the steps below.

1. Write a CSS style that makes the Hero title -- and only the title -- larger for screens wider than `992px`.

_Hint: You will need to use a media query._

When you are done, it should look like the image below for screens wider than 992px.

![Screenshot of the hero solution](/images/29-solution-hero.png)

## 4. Navigation Menu

The navigation links in the header appear on top of each other.

![Screenshot of the nav menu without modifications](/images/29-initial-nav-menu.png)

These links could fit side by side. To complete this exercise, follow the steps below.

1. Use flexbox to put the navigation menu items beside each other.

When you are done, it should look like the image below.

![Screenshot of the nav menu solution](/images/29-solution-nav-menu.png)

## 5. Header

The logo, navigation menu and search input could fit side by side on wider screens. To complete this exercise, follow the steps below.

1. Use media queries and flexbox to put the items in the header beside each other for screens wider than `767px`.

_Hint: Make sure that all items are centred correctly, so that you can draw a line from left to right and it will go through the middle of all the text._

When you are done, it should look like the image below.

![Screenshot of the nav menu solution](/images/29-solution-header.png)

## 6. Views

The links to view different articles are on top of each other. On wider screens, they can fit side by side. To complete this exercise, follow the steps below.

1. Use media queries and flexbox to put the items beside each other on screens wider than `767px`.
2. Use margins to add space between each link.
3. Read this [question and answer](https://stackoverflow.com/questions/35269947/css-align-one-item-right-with-flexbox) about moving one element to the right. Try to use what you learn to put the "View All" link on the right.

When you are done, it should look like the image below.

![Screenshot of the views solution](/images/29-solution-views.png)

## 7. Form Accessibility

When you click on the "Contact" link in the navigation menu, it will take you to a page with a contact form. You will find the code for this page at `contact.html`.

The message field in this form is missing a `<label>`. A form field without a `<label>` can not be completed by a blind user or anyone using assistive technology. To make your forms accessible, _every_ field needs to have a `<label>`.

Follow the steps below to complete this exercise.

1. Add a `<label>` for the message field. The label should read "Message".
2. Click on the "Message" text. If you have added the `<label>` correctly, it should place your focus inside the `<textarea>` so that you can start typing.

When you are done, you should be able to click on the label and begin typing a message like the image below.

![Screenshot of the label solution](/images/29-solution-label.gif)

## 8. Email Field

We need a way to contact someone who sends us a message. Add a new field for the user to enter their email address. Follow the steps below to complete this exercise.

1. Add an `<input>` field and a `<label>` for the email field. Add the email field _between_ the name and message fields.
2. Make sure you use the correct input `type` for email fields.

_Hint: Look closely at the HTML for the form fields. To make the fields look exactly like the image below, you will need to pay attention elements with the class `contact-form__field`._

When you are done, it should look like the image below.

![Screenshot of the email solution](/images/29-solution-email.png)

## 9. Required Fields

If the user submits the form before completing all the fields, we won't know who they are or what they want. We should require the user to complete all fields before the form is submitted.

Follow the steps below to complete this exercise.

1. Add the `required` attribute to the name, email and message fields.
2. Try to submit the form with all fields completed except the email field. You should receive an error.
3. Repeat step 2 for the name and message fields.

When you submit the form with one field empty, you should see an error message like the image below.

![Screenshot of the required fields solution](/images/29-solution-required.gif)

## 10. Radio Buttons

CodeYourFuture has three branches: London, Glasgow and Manchester. When someone contacts us, we should ask them which branch they are interested in.

In this exercise you will add radio buttons for the user to indicate which branch they are interested in. Follow the steps below to complete this exercise.

1. Add three radio `<input>` fields with a `name` attribute of `branch`. Each field should have a different label: `London`, `Glasgow` and `Manchester`.
2. Set the `value` of each `<input>` field to be the same as the label.
3. Use a `<fieldset>` and `<legend>` to group the fields together. The legend should say "What branch are you interested in?"

When you are done, it should look like the image below.

![Screenshot of the radio buttons solution](/images/29-solution-radio.png)

## 11. Text Formatting

When you click on the "About" link in the navigation menu, it will take you to a page with paragraphs of text. You will find the code for this page at `about.html`.

It is difficult to read text that runs too long on one line. To improve this, designers restrict how wide blocks of text are (usually `40em`-`60em`). They also increase the space between each line.

Follow the steps below to complete this exercise.

1. Restrict the maximum width of the article to `50em`. _If you can't remember how to set the maximum width, search on Google for "how do i set the maximum width of an element"._
2. Use flexbox to centre the article on the page.
3. Increase the space between lines of text in the article. Your change should _only_ effect the text in the article.

_Hint: Read this [question and answer](https://stackoverflow.com/questions/3845433/css-line-spacing) if you don't know how to increase the space between lines of text._

When you are done, the about text shoudl look like the image below.

![Screenshot of the text formatting solution](/images/29-solution-text.png)

## 12. Submit your Pull Request

Congratulations, you've completed all of the exercises! :tada:

When you have completed all of the tasks, commit your changes. Then run the following command to push your changes to GitHub.

```
git push
```

When this is done, post a link to your GitHub repository in the Slack channel and ask the mentors to take a look.

:+1:
