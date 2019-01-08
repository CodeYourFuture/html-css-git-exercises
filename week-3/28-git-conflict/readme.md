# Git Merge Conflict

In this exercise you will learn how to work with two branches that have "diverged". Branches diverge when one branch has a commit that doesn't exist in the other branch. In some cases, git can not merge them and you have a "merge conflict".

Follow the instructions below to create a merge conflict and then learn how to solve the problem.

> _Hint: There are many ways this exercise can cause problems if you don't follow the steps precisely. If you are confused at any time, ask a mentor for help._

In [exercise 15](/week-2/15-git-merge) you created and merged a pull request to change the links to `orangered`. But your boss is still not happy. She wants to try a purple colour (`fuchsia`).

First, make sure you are on the `master` branch:

```
git checkout master
git branch
```

You should see the following printed to the terminal, which tells you that you are currently on the `master` branch:

```
  green_links
* master
  orange_links
  red_links
```

Create a new branch for changing the link colour to `fuchsia`:

```
git checkout -b purple_links
```

Now edit the `style.css` file and change the colour of the links in your messages to `fuchsia`. Check to see if the links have changed to a purple colour. If they have, then add and commit your changes.

Before you can show your boss the purple colour, she calls you into her office. Customers of your messaging service are complaining about the orange links. Some say it is too bright and hard to read. She wants you to put aside your work on the purple links and set the links back to the original colour (`#4491db`) in the `master` branch immediately.

Make sure you are on the `master` branch:

```
git checkout master
```

> _Hint: Run `git branch` in the terminal to make sure you're on the correct branch._

Edit the `style.css` file and change the colour of the links in your messages to `#ff00ea`. Check to see if the links have changed to a purple colour. If they have, then add and commit your changes.

Phew! You have restored the blue links and customers have stopped complaining. The next day your boss decides she wants to launch the purple links. You can do this by merging your `purple_links` branch into master.

In [exercise 15](/week-2/15-git-merge) you merged a branch into `master` using GitHub. This time we'll do the same thing on the command line.

Check out the `master` branch:

```
git checkout master
```

> _Hint: Don't forget to run `git branch` in the terminal to make sure you're on the correct branch._

Now you can merge the `purple_links` branch into `master` with the following command:

```
git merge purple_links
```

When you try to do this, you will get a message telling you that there is a merge conflict.

```
Auto-merging week-3/20-git-conflict/styles.css
CONFLICT (content): Merge conflict in week-3/20-git-conflict/styles.css
Automatic merge failed; fix conflicts and then commit the result.
```

This tells you that there is a merge conflict in the file `week-3/20-git-conflict/styles.css`. If you open the file you will find that lines have been added to the file.

```
/* Add your own CSS code below */
.link {
<<<<<<< HEAD
	color: #4491db;
=======
	color: fuchsia;
>>>>>>> purple_links
	font-weight: 700;
	text-decoration: none;
}
```

Why did this happen? When git tried to merge the `purple_links` branch into `master` it found two commits: the commit where you changed the links to blue and the commit where you changed the links to purple.

Since these commits change the same line of code, git doesn't know which one is correct. You have to tell it the correct code. To do this, edit the file to remove the added lines and the blue colour property, so that only the purple colour remains:

```
/* Add your own CSS code below */
.link {
	color: fuchsia;
	font-weight: 700;
	text-decoration: none;
}
```

Test the changes in your browser. If the links have been changed to a purple colour, you've resolved the merge conflict. Now you need to add and commit the files to complete the merge. Run the following commands:

```
git add week-3/20-git-conflict/styles.css
git commit -m "Merge purple_links branch"
```

Way to go! You've now resolved a merge conflict. Merge conflicts are one of the most challenging things you will deal with. If you made it through, give yourself a pat on the back.
