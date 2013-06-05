
###background

tishadow is made up of three component: `server`, `app` and `cli`

you use the `cli` to send your code/commands to the `server` that will push it
to the `app` running on your devices 

for those that need a diagram with picture of a cloud, here you go

![diagram](/assets/img/diagram.png)

###cli

grab tishadow from npm

```
$ [sudo] npm install -g tishadow
```

###app
generate the source code / project for the tishadow app

```
$ mkdir ~/tishadowapp && tishadow app -d ~/tishadowapp
```

either import the project into titanium studio and deploy it to your
devices or you can use the titanium cli command as follows

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


