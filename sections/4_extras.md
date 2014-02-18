
### repl

the tishadow repl is available and evaluates commands in a
persistent sand-boxed context. 

to launch the repl enter the following command:

```bash
  tishadow repl
```

`launchApp(appName)`, `closeApp()` and `clearCache()` methods available
to interact with apps cached in the TiShadow app.

`require()`, `Ti.include()` and assets are relative the running app
inside the tishadow app

**note**: you can now also pipe to the tishadow repl using the `--pipe` flag. have a look 
at this [screencast](http://www.youtube.com/watch?v=f9ZLAtzJdGY)

###spies

you can add *spies* on objects so that you can modify them from
the repl at run time. in your code add the following command

```
addSpy(name, object)
```
this can be included as a comment which will automatically be uncommented when pushed
using tishadow, for example

```
//addSpy("mywindow",win)
```
 
to get the object from the repl, simply use, e.g.

```
getSpy("mywindow")
```

for alloy, since comments are removed at compile time you can use the
following [alloy.jmk](https://gist.github.com/dbankier/5648950) to
automatically inject spies on the `$` object in your controllers, naming
the spy with the file's name

### from the browser
 
enter the following address in a browser window:

```
    http://localhost:3000/
```

in the editor you can enter code and press command+s to deploy the code
snippet to all connected devices. Have a look at the demo [video](http://www.youtube.com/watch?v=xUggUXQArUM).

coding from the webpage works much like the repl and variables
are stored in a sand-boxed context

### appify

the `tishadow appify` command can be used to create a
stand-alone app that is integrated with tishadow. the app automatically
launches the contained tishadow bundle and connects to a pre-configured
server. this allows connecting to the deployed app via the repl and/or
push upgrades.

you may need to provide the `--host`, `--port` and/or `--room` configuration
of the remote tishadow server you want the app to connect to. since the appify command
generates a new project you will need to provide the destination path for the new project. E.g.

```
  $ mkdir ~/myapp
  $ tishadow appify -d ~/myapp --host myhost.com --port 80 --room my_private_room
```


**new**: you can run the server with the `--manage-versions` flag and it
will track bundle versions. apps (or appified apps) that connect with an
old version will automatically upgrade. you may wish to use the `deploy` command instead
of the `run` command, which sends new versions to your server without immediately pushing it
out to connected devices.

see the following [blog post](http://www.yydigital.com/blog/2013/2/19/TiShadow_Appify) for a
guided example

### screenshot


you can capture screenshots of all connected devices using the following command: 

```
  $ tishadow screenshot
```

the screenshots will be saved in `png` format in the `/tmp` directory or the path
configured using the `--screenshot-path` flag when starting the server.

alternatively, instead of saving the screenshots you can stream them to the browser. use the following command:

```
  $ tishadow screenshot --screencast 1000 --scale 0.1
```

in the above example a screenshot is sent every 1000ms and scales the images to 10% of their height/width.
Go to: `http://localhost:3000/screencast` to view the screencast.

### tishadow server hosting

the tishadow server can be hosted on a number of paas providers. most however have limited support
for web sockets. you may need to use the `--long-polling` flag when running the tishadow server.

you may wish to try [ticaster.io](https://www.ticaster.io). it is a service designed specifically for
tishadow appified apps. ticaster.io manages version deployment so you can use control which versions
are deployed to the devices and even supports production a/b testing.
 
