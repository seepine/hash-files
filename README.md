# hash-files

This action is to compute the SHA256 hash of specified files.

The hash function is based on [nektos/act](https://github.com/nektos/act/blob/ac5dd8feb876d37ae483376a137c57383577dace/pkg/exprparser/functions.go#L183). Thanks!

**NOTE:** This action is written in Go. Please setup the Go environment before running this action or use a runner with Go environment installed.

## Usage

``` yml
- uses: seepine/hash-files@v1
  with:
    # The working dir for the action.
    # Default: ${{ github.workspace }}
    workdir: ''

    # The patterns used to match files.
    patterns: '**/package-lock.json'

    # Multiple patterns should be seperated by `\n`
    patterns: |
      **/package-lock.json
      **/yarn.lock
```

## Input

|Output Item|Description|Required|Default|
|---|---|---|---|
|workdir|The working dir for the action|false|${{ github.workspace }}|
|patterns|The patterns used to match files|true||
|gitignore|Respect ignore patterns in .gitignore files that apply to the globbed files.|false|true
|ignoreFiles|Glob patterns to look for ignore files, which are then used to ignore globbed files.|false|

## Output

|Output Item|Description|
|---|---|
|hash|The computed hash result|
|matched-files|The files matched by the patterns|

## Example
``` yml
# Setup the Node environment. This step can be skipped if Node has been installed.
- uses: actions/setup-node@v3

- uses: seepine/hash-files@v1
  id: get-hash
  with: 
    patterns: |
      **/package-lock.json
      **/yarn.lock

- name: Echo hash
  run: echo ${{ steps.get-hash.outputs.hash }}
```
