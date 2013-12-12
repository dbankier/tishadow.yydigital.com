### get going

make sure the tishadow server is running and tishadow app is
connected to the server

### basic deploy

from your own project root directory enter the following command to
deploy your app to all (tishadow) connected devices

```
$ tishadow run
```

once your app has been deployed you can more quickly push and update only the modified
files with the following command

```
$ tishadow run --update
```

when you push code to the tishadow app it will relaunch the application.
if you are pushing a small update and do no want to relaunch the
application you can use the following command

```
$ tishadow run --patch
```

the updated file will be cleaned from the require cache and the change
will be visible next time the file is required

### keeping it clean

tishadow now automatically closes all windows and tabgroups when
deploying a new bundle. any other cleanup operations can be added the
`close` listener of the window/tabgroup.

you may also wish to clean/delete all the cached apps and databases
stored inside the tishadow app and you can do so by using the following command:

```
tishadow clear
```

you can also close a running application using the following command:

```
tishadow close
```

### dynamic localisation

you can also choose the locale 
you wish to use when launching your app/tests. simply add the
two-letter language code to your command:

```
  tishadow run --locale es
  tishadow spec --locale nl
```

### working with alloy

**new**: as of tishadow version 2.3.0, tishadow will detect an alloy project and compiled
it for you. what follows is for pre 2.3.0.

alloy is fully supported on tishadow. you need to run the alloy compile command
prior to sending the code. unfortunately, alloy (currently) only supports platform
specific builds so you need to compile for your specific target platform.
for example, you can run the following command to run your alloy project
on tishadow

```
$ alloy compile --config platform=ios && tishadow run
```

### server configuration and rooms

the tishadow server supports remote hosting with configurable http
ports. it also allows for private "rooms" (much like chat rooms) so that
the tishadow server can be partitioned and shared

for example to start the server using a particular port

```
$ tishadow server --port 3001
```

all cli commands can be sent to a particular server and room, for
example

```
$ tishadow run --host myhost.local --port 3001 --room david
``` 

the `tishadow log` command is
available to tail remote server logs (in the default or selected room)

the `tishadow config` command is available to set the default host, port
and room for all the relevant command below so you do not need to use the
`--host`, `--port` and `--room` flags with every command

### automatic updates

you can use the `@` operator to proceed your commands. when any files in
the `Resources` directory are modified the command that follows will
executed. for example:

```
tishadow @ run --update -l nl
```

there are a number of other techniques to automatically push your changes whenever
you save any changes to your code. see these links:

 * [grunt-tishadow](grunt-tishadow) by @astronaughts 
 * [using supervisor](https://gist.github.com/kwhinnery/5565515) by @kwhinnery

you should really checkout the [JALT Stack](https://github.com/dbankier/JALT)

### gotchas

 * `Ti.include` is supported if included with the full path 
 * only files in the `Resources` directory will be sent to the device
   using TiShadow. That said, localisation files **are** supported.
 * native modules _can_ be supported if built into the tishadow app
   first
 * any necessary changes to the tiapp.xml file must be added directly to
   the tishadow app tiapp.xml file - see
[FokkeZB's Ti.Facebook example](http://fokkezb.nl/2013/04/18/how-to-use-ti-facebook-in-tishadow/)
 * custom fonts will be loaded if placed in the `Resources/fonts`
   directory (iOS only).
 * if there any errors about a Titanium SDK command not being found, add
   them to the Includes.js files and clean and build the TiShadow app
 * any Ti.API logs will be redirected to the server logs and webpage

   
