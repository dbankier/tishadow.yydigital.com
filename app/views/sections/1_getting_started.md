
###background

tishadow is made up of three component: `server`, `app` and `cli`

you use the `cli` to send your code/commands to the `server` that will push it
out the `app` running on your devices 


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
devices or you can you the titanium cli command as follows

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
then connect to the server by entering the server address in the app and hitting
`connect`

you're good to go!


