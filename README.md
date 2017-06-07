# VS Code with Typescript, tslint, and jest

As a first time user of each of these technologies, I struggled with getting
everything working correctly.

## node version
### v8.0.0
This version does not work because of
[https://github.com/facebook/jest/issues/1652](this issue) in node.

### v6.11.0
This is the version I've regressed to in order to make debugging a Jest test
work properly.

## VS Code extensions used
- TSLint (vnext) by egamma
- Jest by Orta

## Debugging Jest tests
- Setting a breakpoint doesn't work. You have to add a `debugger;` statement.
And this only works with node v6. Node v8.0.0 has a bug (see above) that
prevents even this from working.

- You have to build the project before running the `Debug Jest Tests` task (in
  `launch.json`.) The only reason this seems like a pain is that the normal
  workflow in VS Code, with the Jest extention, has the tests run automatically.
  - To launch this task, click on VS Code's debugger icon on the left icon bar,
    then select the task from the drop-down menu which appears at the top of the
    left panel.

