# HTML, CSS and Git exercises

This repository contains exercises for CodeYourFuture students learning HTML, CSS and Git commands.

## Getting started

You will be working on a messaging application in these exercises. Follow these steps to begin working on the exercises.

### Fork and clone this repository

First, you need to create your own copy of these exercises. We call this a "fork". Follow these steps to create your fork.

![Screenshot showing the fork button in GitHub](/images/fork-start.png)

![Screenshot showing how to fork to your user account](/images/fork-user-account.png)

![Screenshot showing the clone details](/images/fork-clone.png)

![Screenshot showing the button to copy the clone details](/images/fork-copy-url.png)

Next, you need to download your fork so that you have the files on your computer. Follow these steps to clone your fork. Open your Terminal and navigate to your directory for CodeYourFuture course work.

```
cd <your-course-directory>
```

Run the following command in your terminal to clone this repository to your computer. Where it says `<url>`, you should paste the URL of your fork. _Hint: It's copied to your clipboard, so you can paste it in._

```
git clone <url>
```

For example, if your fork's URL is `git@github.com:***/html-css-git-exercises.git`, the command would be:

```
git clone git@github.com:***/html-css-git-exercises.git
```

Next, navigate to the repository's directory and open your code editor.

```
cd html-css-git-exercises
code .
```

When you're done, you should see your code editor with the files open on the left, like the following screenshot.

![Screenshot showing the project open in your editor](/images/fork-editor.png)

### Set up the project

Before you can start the exercises, you must install all of the code necessary to run the exercises. Open the Terminal and run the following command.

```
npm install
```

Carefully read the messages that appear. Are there any errors? If so, please ask a mentor for help.

### Begin working on the exercises

To work on the first exercise, run the following command in the Terminal.

```
npm run 1
```

This will launch the sample website for the first exercise in your browser.

Now go back to your code editor. Open the first exercise in the `week-1` directory and find the `readme.md` file.

![Screenshot showing how to open a preview of the readme for the first exercise](/images/fork-open-readme.gif)

Read the instructions in the file you just opened. Follow the steps to complete the exercise.

### Completing more exercises

When you have finished the first exercise, you can begin the next one. To do this, go to the Terminal and type `CTRL`+`C` to stop running the first exercise.

To run another exercise, run the following code with the correct number of that exercise:

```
npm run 2
```

## When you have completed all exercises

When you reach the final exercise, you'll be asked to submit a pull request. When you've finished that task, post in your Slack channel to let the mentors know that you have finished.
