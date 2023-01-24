## Node, Express, and MongoDB Stack Setup Cheat-Sheet

_Note: This setup is for users on MacOS, with Yosemite (10.10) or later (you can find your current OS version on Mac by navigating to Apple menu -> About this Mac). If you're using an older version of MacOS, I'd highly recommend upgrading, otherwise check our Community board and we'll get you some help. This course is optimized for Mac users, but if you're using Windows or a Linux OS, see the Community board for more help._

#### 1. Install basic command line tools
We'll be using Terminal to run commands, including starting up our local DB and server and pushing to heroku. You can open up terminal by using `CMD + Space` to spotlight search for 'Terminal' application, or finding it in your applications folder.
Check if you have command line tools already by typing `which xcode-select` in terminal. If you see an output, something similar to `/usr/bin/xcode-select`, you already have them installed; skip this step.

If you don't have them installed already, install the MacOS command line tools with this command in Terminal:

`xcode-select --install`
and follow the instructions.

#### 2. Homebrew

Next, check if you have Homebrew](https://brew.sh/) installed by typing `which brew`, see if there is an output. If not, go ahead and install with this command:
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

If you run into issues, try running `rm -rf /usr/local/Cellar /usr/local/.git` and then retry the previous command. Feel free to consult the community board if you get stuck.

#### 3. Git

If you don't have one already, sign up for an account on [https://github.com/](https://github.com/). Then, type `which git` to check if you already have git installed - otherwise go ahead and install it with `brew install git`. Then, finish up setting up Git with the instructions under 'Setting up Git' found [here](https://help.github.com/articles/set-up-git/). No need to create a repository yet.

#### 4. Node and Mongo

The next couple of steps are quick - go ahead and install node, mongo, and nodemon with the following commands:

* `brew install node`
* `npm install -g nodemon`
* `brew install mongodb`
* 
Now, we need to make a local db directory. Use the following commands:

* `cd /` (to make sure you are in your root directory)
* `sudo mkdir -p data/db` (to make the directory)
* `sudo chown -R $USER data/db` to give yourself permissions

Now, type `which mongo` and `which mongod` to check that you have outputs for both to verify that they are installed.

If you have any issues, feel free to reach out on the Community board to get help :)







