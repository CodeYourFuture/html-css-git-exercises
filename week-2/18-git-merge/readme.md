# Git Merging with Pull Requests

In [exercise 8](/week-1/8-git-branch) you created two branches. The links were red in one branch and green in the other, so that you could quickly show your boss both options. She has decided she doesn't like either colour. Instead, she wants the links in a dark orange.

In this exercise you will learn how to apply changes you have made in one git branch to another branch. This is called "merging". Follow the instructions below to create a branch, make changes, and merge them to the `master` branch.

> _Hint: If you get confused at any time, ask a mentor for help. Merging can be difficult!_

First, let's build our `dark_orange` branch. You did something similar in exercise 8, but let's practice doing it again.

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

Now edit the `style.css` file and change the colour of the links in your messages to `orangered`. Check to see if the links have changed colour. If they have, then add and commit your changes.

Next, you will need to push the `orange_links` branches. When you have a _new_ branch, you have to add extra information to the _first_ `push` command:

```
git push -u origin orange_links
```

When you have successfully pushed your `orange_links` branch, you should see the following in your GitHub repository.

![Screenshot of the new branch pull request prompt in GitHub](/images/18/pull-request-0.png)

GitHub will show you this yellow bar whenever you have recently pushed to a branch. If you pushed your changes more than 20-30 minutes ago, it may not appear.

Now we are ready to merge the changes from our `orange_links` branch into our `master` branch. Click the **Compare & pull request** button indicated below.

![Screenshot of the new branch pull request prompt in GitHub with the pull request button indicated](/images/18/pull-request-1.png)

On the next page, check to make sure the correct branch is showing where the arrow points to `orange_links`. Then scroll down to see a description of the changes that will be applied.

When you're ready to create the pull request, click the **Create Pull Request** button.

![Screenshot of the new pull request screen in GitHub](/images/18/pull-request-2.png)

Now that you've created the pull request, make some final checks and then merge it.

1. It shows each commit you made on the branch. Make sure you _only_ see the commits you expect to see.
2. Click the **Files Changed** link to see a list of all the changes you are about to merge. Make sure you _only_ see the changes you expect to see.
3. When you're ready, click the **Merge Pull Request** button.

![Screenshot of the open pull request screen in GitHub](/images/18/pull-request-3.png)

Congratulations! You have now changed the colour of the links and merged those changes to your `master` branch.
