# gh-pages and student server and pull request

## Refreshers

Mac users can use terminal without any huge issues with development. Unsure if git is pre-installed on macs, but that's a plus. Windows may need **git bash**, or **PuTTY** for connecting with SSH. Windows users will also want to download [Git credential manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows) so you don't have to enter your passcode every time you want to push.

**Node** is a JavaScript runtime, which can be compared to Java. JavaScript has a ton of [different engines](https://en.wikipedia.org/wiki/JavaScript_engine) that compiles your code and runs it. Node uses the V8 engine. I don't know of the huge performance differences and it doesn't really matter to us in the context of this class, but it's kinda neat seeing what powers everything under the hood. Sometimes you'll see me (William) using this without any HTML, but don't worry about it for now.

**NPM** is one of the main package managers for JavaScript. We'll be using it mostly, but know that you can mostly interchange NPM and [Yarn](https://yarnpkg.com/en/). You can install yarn from its direct competition, npm. Or you can download it from yarn's website. You'll see people use one or the other if you watch youtube tutorials. Doesn't really matter too much. The packages usually are up to date on both package managers.

**live-server** is a package that runs a little development server in the directory you started it on. It allows for live reload. You will be using it for the first few things, but eventually will not be needing this.

**gh-pages** - Will be a package you use later on too, but forget about that for now. Right now, just have an index.html file on that branch, and you can upload it to the student server pretty seamlessly.

## Student server

1. Activate Shared Web Hosting [here](https://itconnect.uw.edu/connect/web-publishing/shared-hosting/activating-shared-web-hosting/)
    1. Will make a public_html file when you SSH in, which you'll use to organize your server
2. Find your server. [Documentation](https://itconnect.uw.edu/connect/web-publishing/shared-hosting/web-development-environments/).
    1. It will most likely be uwnetid@vergil.u.washington.edu.
3. Connecting with SSH [here](https://itconnect.uw.edu/connect/web-publishing/shared-hosting/ssh/)
    1. Mac users have SSH built in
    2. Windows will need git bash or PuTTY as I said above. [PuTTY download](https://www.chiark.greenend.org.uk/~sgtatham/putty/)
    3. `ssh uwnetid@vergil.u.washington.edu`, use your netid password.
4. Transferring files
    1. Use the github repo you made. You can for now either have it in your main branch or your new gh-pages branch.
    2. In the SSH terminal, clone the repo using the ssh option on github.
        1. You most likely will need an SSH key. Will be making instructions for git bash, unsure of how it is for PuTTY. Instructions [here](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)
        2. When logged into the student server, do `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`. Use the email that you used for your github account. 
        3. Press enter for file location (use default), and you can enter a passcode if you want.
        4. If you `cd ~/.ssh` you should see with `ls` that there are three files.
        5. `vi id_pub.rsa`, and highlight everything from `ssh-rsa` to your email at the end.
        6. Right click and copy (or use ctrl-insert)
        7. Go to github settings > SSH and GPG keys
        8. Add the ssh key
    3. Clone the repo, and if you made a separate gh-pages branch which has an index.html file (will use later with React), then do `git checkout gh-pages` or use `git checkout Development` if this is before project 3.

Your base url will be at http://students.washington.edu/uwnetid/. Going to http://students.washington.edu/uwnetid/reponame will automatically open the index.html file.