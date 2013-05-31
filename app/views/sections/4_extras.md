
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
stand-alone app that is integrated with tishadow. the app will automatically
launches the contained tishadow bundle and connects to a pre-configured
server. the allows connecting to the deployed app via the repl and/or
push upgrades.

see the following [blog post](http://www.yydigital.com/blog/2013/2/19/TiShadow_Appify) for a
guided example


