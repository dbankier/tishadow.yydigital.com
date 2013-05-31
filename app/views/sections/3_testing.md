### jasmine

tishadow supports [jasmine](http://pivotal.github.com/jasmine/) bdd tests. 
(insipration taken from these two projects: [titanium-jasmine](https://github.com/guilhermechapiewski/titanium-jasmine/) and [jasmine-titanium](https://github.com/akahigeg/jasmine-titanium))

include your specs in the `spec` path of your project, ensuring
the files end with `_spec.js`. 

simply write the spec without any including/requiring the jasmine
library; they will be added for you

to execute the tests enter the following command

```
tishadow spec
```

the test results will be returned to the server/cli output

![Spec Output](http://github.com/dbankier/TiShadow/raw/master/example/spec.png)

see the included example project or this [blog post](http://www.yydigital.com/blog/2013/2/14/Testing_Alloy_With_Jasmine_And_TiShadow)


### assertions

tishadow also supports the use of simple assertions and the results are
returned either to the browser or server logs
 
For example:

```javascript
    assert.isNumber(6, "Testing if 6 is a number");
    assert.isArray([1,2,3,4], "Testing if it is an array");
```

the following assertion are supported:
`equal`, `strictEqual`, `deepEqual`, `isTrue`, `isFalse`,
`isEmpty`, `isElement`, `isArray`,`isObject`, `isArguments`, `isFunction`,
`isString`, `isNumber`, `isFinite`, `isBoolean`, `isDate`, `isRegExp`, `isNaN`, `isNull`,
`isUndefined`, `lengthOf`, `match`, `has`

also the equivalent not assertions are available as well, e.g.
`notEqual`, `isNotString`, `isNotNumber`, etc


### auto-testing

there are a number of techniques to automatically push your changes whenever
you save any changes to your code. see these links

 * [grunt-tishadow](grunt-tishadow) by @astronaughts 
 * [using supervisor](https://gist.github.com/kwhinnery/5565515) by @kwhinnery

