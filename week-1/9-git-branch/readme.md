# Git Branches

Git allows you to keep multiple versions of your code and quickly switch between versions. It calls each version a "branch". Follow the instructions below to learn about branching.

Let's pretend you work for a company running a messaging application. Your boss is thinking about changing the colour of the links in messages. She can't decide whether to change them to red or green, so she asks you to show her what it would look like in each colour.

In this case, we use branches to create copies of our messages. In one version we will change the links to red. In another version we will change the links to green. Then we can switch between them to show her both versions.

First, open the terminal in your code editor. _The terminal is where you entered `npm run 9` to run this exercise._

Check which branch you are currently in by entering the following command into your terminal:

```
git branch
```

You should see the following printed to the terminal, which tells you that you currently have one branch, the `master` branch:

```
* master
```

Enter the following command into your terminal to create a new branch:

```
git checkout -b red_links
```

Enter `git branch` to see if the branch was created. You should see the following:

```
master
* red_links
```

This means that you have two branches and you are currently editing the `red_links` branch.

Now edit the `style.css` file to turn the links in your messages red. Then add and commit the files.

_Hint: If you tried to `git push` you may have received an error. Don't worry, we'll cover this later. Continue following the instructions below._

You can now switch between your `master` branch, where the links are blue, and your `red_links` branch, where your links are red. Enter this command to switch to the `master` branch:

```
git checkout master
```

Now look in your browser. Your links should be blue. _Hint: You may need to run your `npm run 9` command if you stopped it._

Use this command to switch to your `red_links` branch:

```
git checkout red_links
```

Now check your browser to make sure the links are red. Try switching back and forth between your two branches a few times to see how it works.

_Hint: Don't copy/paste the commands in this exercise. You will learn more by typing them out. It's ok if it takes you a little longer!_

Next you'll need to create a new branch for changing the link colour to green.

Enter the following command to make sure you are on the `master` branch:

```
git checkout master
```

Now check out a new branch for your green links. You learned how to create a new branch above. Use the same command, but use the branch name `green_links` instead.

When you have created a new branch, enter the following command:

```
git branch
```

You should see the following:

```
* green_links
  master
  red_links
```

This means you have three branches and you are currently on the `green_links` branch. _Hint: If you don't see `*` next to `green_links`, you have made a mistake. Fix this before moving forward!_

Edit the `style.css` file to turn the links in your messages green. Then add and commit the files.

You can now switch between all three branches: `master`, `green_links`, and `red_links`. Each time you switch, check your browser to see that the links have changed to the right colour.

To complete this exercise, you will need to push both branches. Normally, you would switch to the branch and push like this:

```
git checkout red_links
git push
```

If you try to do that, you will receive an error message. When you have a _new_ branch, you have to add extra information to the `push` command:

```
git checkout red_links
git push -u origin red_links
```

_Hint: You only have to use this extra information the first time you push a new branch. After that, you can push to your branch with just `git push`._

Using this technique, try to successfully push your `green_links` branch.

When you have successfully pushed both branches, you should see them in your GitHub repository. You can find them by clicking on the **Branch** button. Here's an example of what it should look like:

![Screenshot of branches list in GitHub](/images/9/github-branches.png)
