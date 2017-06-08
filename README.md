# VS Code with Typescript, tslint, and jest

As a first time user of each of these technologies, I struggled with getting
everything working correctly.

The main challenge was understanding how to debug Jest tests using VS Code's
debugger. On the other hand, debugging Typescript code outside of tests was easy
to set up.

The TSLint and Jest extensions are incredibly useful, since they provide live feedback

## node version
### v8.0.0
This version does not allow debugging of Jest tests because of
[https://github.com/facebook/jest/issues/1652](this issue) in node.

### v6.11.0
This is the version I've regressed to in order to make debugging a Jest test
work properly.

## VS Code extensions used
- [TSLint
  (vnext)](https://marketplace.visualstudio.com/items?itemName=eg2.ts-tslint) by
  egamma
  - This makes TSLint errors appear inline and in the Problems panel
    automatically.
  - Unfortunately, this version does not yet support the `tslint.autoFixOnSave`
    VS Code user setting that automatically applies TSLint fixes on save. I like
    that feature.
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
  by Orta
  - This runs Jest tests automatically in the background whenever code is updated.

## Typescript plugins used
- [tslint-language-service](https://github.com/angelozerr/tslint-language-service)
  - This is some kind of black magic that makes the TSLint extension work properly.
  - I had to use this because TSLint's `no-unsafe-any` rule seemed to be
    broken without it.


## Debugging Jest tests
- Setting a breakpoint doesn't work. You have to add a `debugger;` statement.
And this only works with node v6. Node v8.0.0 has a bug (see above) that
prevents even this from working.

- You have to build the project before running the `Debug Jest Tests` task (in
  `launch.json`.) The only reason this seems like a pain is that the normal
  workflow in VS Code, with the Jest extention, has the tests run automatically.
  - To build the project quickly, type `Ctrl+Shift+B`
  - To launch the debug task, click on VS Code's debugger icon on the left icon
    bar, then select the task from the drop-down menu which appears at the top
    of the left panel.

- Interestingly, if you don't build the project, the tests will still be
  transpiled into Javascript by the jest transform script, and you'll be able to
  step through the javascript version of the test.

- For some reason you can only step through Javascript versions of the tests,
  but if you set a breakpoint in the Typescript code of a module called by the
  test, VS Code will let you step through the Typescript code
