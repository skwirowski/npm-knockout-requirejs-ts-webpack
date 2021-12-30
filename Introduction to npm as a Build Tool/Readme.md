# Course topics:
1. `Pre` and `Post` hooks
2. Running several scripts at once (combining commands):
  * `"npm run compile:coffee && npm run compile:ts"` - if first script fails (first command run and exits with something else than 0) the second one is not run (execution stops if one step fails)
  * `"npm run compile:coffee; npm run compile:ts"` - ignore exit code and run both scripts no matter what
3. Use one operation result/output as argument in another operation
  ```json
  "build:bundle": "browserify ./src/index.js -o ./lib/bundle.js"
  ```
  remove output file
  ```json
  "build:bundle": "browserify ./src/index.js"
  ```
  now browserify will send its output to default output - terminal window or another task we piping the output to
  ```json
  "build:bundle": "browserify ./src/index.js |"
  ```
  vertical bar "|" means take the output of the command on the left and pass it as the first argument to the command on the right
  ```json
  "build:bundle": "browserify ./src/index.js | uglifyjs -mc > ./lib/bundle.js"
  ```
  ">" redirection operator -  the greater-than sing is used to send to a file, whatever information from the command would have been displayed in the Command Prompt window had you not used the operator [more about redirection opertaors here](https://www.lifewire.com/redirection-operator-2625979)
4. There are tools for watching the unwatchable npm packages e.g. watch npm, watchify
5. To reload client *live-reload* can be used