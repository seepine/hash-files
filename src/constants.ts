/* eslint-disable no-shadow */
export enum Inputs {
  Workdir = 'workdir', // Input for cache, restore, save action
  Patterns = 'patterns', // Input for cache, restore, save action
  Gitignore = 'gitignore', // Input for cache, restore action
  IgnoreFiles = 'ignoreFiles' // Input for cache, save action
}

export enum Outputs {
  Hash = 'hash', // Output from cache, restore action
  MatchedFiles = 'matched-files' // Output from restore action
}
