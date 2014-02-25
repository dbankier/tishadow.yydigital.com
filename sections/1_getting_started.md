
###background

tishadow is made up of three component: `server`, `app` and `cli`

you use the `cli` to send your code/commands to the `server` that will push it
to the `app` running on your devices 

for those that need a diagram with picture of a cloud, here you go

![diagram](/img/diagram.png)

###cli

grab tishadow from npm

```
$ npm install -g tishadow
```

**PLEASE NOTE:** The package installs titanium hooks in the post install. 
If you install with `sudo` and get the error `Unable to write config file...` 
use the following command:

```
$ sudo npm install -g tishadow --unsafe-perm
```

###app
generate the source code / project for the tishadow app

```
$ mkdir ~/tishadowapp && tishadow app -d ~/tishadowapp
```

either import the project into titanium studio and deploy it to your
devices or you can use the titanium cli command as follows

**note**: you can use the `--upgrade` flag to upgrade an existing tishadow app

```
$ cd ~/tishadowapp
$ titanium build -p iphone -T device -F universal
$ titanium build -p android -T device
``` 

###server

start the tishadow server

```
$ tishadow server
```

###get going

connect to the server by entering the server address in the app and
tapping `connect`

you may want to have a look at @stephenfeather's [getting started series](http://www.stephenfeather.com/blog/tishadow-getting-started-part-1/)

you're good to go!

###tishadow express

you can do _a lot_ with tishadow. keep reading to find out more.
but if it is all too much at the moment and you just want to use it for
live reload you can do the following.

during install a titanium cli plugin/hook was installed for you. from your project you can just use the following command:

```
  titanium build -p android -T device --shadow 
```

this will launch your app in the simulator and reload with any code/style/localisation changes.

under the hood it:

 1. starts the tishadow server - `tishadow server`
 2. launches an appified version of your app - `tishadow appify` (with extra flags)
 3. watches your code and push on any changes - `tishadow @ run --update`

**mac**: if you get the error `emfile: too many opened files.`, this is because of your system's max opened file limit. for osx the default is very low (256). increase your limit temporarily with `ulimit -n 8192`, the number being the new max limit.



