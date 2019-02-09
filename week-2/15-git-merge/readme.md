# Git Merging with Pull Requests

In [exercise 8](/week-1/8-git-branch/readme.md) we created two branches. The color of links was red in one branch and green in the other, so that you could quickly show your boss both options. She has decided she wants the links a dark orange.

We can apply changes we have made in one git branch to another branch. This is called "merging". Follow the instructions below to create a branch, make changes, and merge them to the `master` branch.

First, let's build our `dark_orange` branch. _You did something similar in exercise 8, but let's practice doing it again._

Open the terminal in your code editor. Check which branch you are currently in by entering the following command into your terminal:

```
git branch
```

You should see the following printed to the terminal, which tells you that you are currently on the `master` branch:

```
  green_links
* master
  red_links
```

Enter the following command into your terminal to create a new branch:

```
git checkout -b orange_links
```

Enter `git branch` to see if the branch was created. You should see the following:

```
  green_links
  master
* orange_links
  red_links
```

This means that you are currently editing the `orange_links` branch.

Now edit the `style.css` file and change the color of the links in your messages to `orangered`. Then add and commit the files.

Next, you will need to push the `orange_links` branches. When you have a _new_ branch, you have to add extra information to the _first_ `push` command:

```
git push -u origin orange_links
```

When you have successfully pushed your `orange_links` branch, you should see it in your GitHub repository. You can find it by clicking on the **Branch** button. Here's an example of what it should look like:

![Screenshot of branches list in GitHub](/images/8-github-branches.png)
