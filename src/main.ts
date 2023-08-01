import * as core from '@actions/core'
import {Inputs, Outputs} from './constants'
import * as utils from './utils'
import {getFiles, readFile} from './files'

async function run(): Promise<void> {
  try {
    const workdir: string = utils.getInput(Inputs.Workdir, {required: true})
    const patterns = utils.getInputAsArray(Inputs.Patterns, {
      required: true
    })
    const gitignore = utils.getInputAsBool(Inputs.Gitignore) || true
    const ignoreFiles = utils.getInputAsArray(Inputs.IgnoreFiles)
    core.debug(`workdir: ${workdir}`)
    core.debug(`patterns: ${patterns}`)
    core.debug(`gitignore: ${gitignore}`)
    core.debug(`ignoreFiles: ${ignoreFiles}`)

    const files = await getFiles(workdir, patterns, {gitignore, ignoreFiles})
    let hash = ''
    core.debug(files.toString())
    const reads = files.map(async file => readFile(file))
    const contents = await Promise.all(reads)
    if (contents.length === 1) {
      hash = contents[0]
    } else if (contents.length > 1) {
      let hashStr = ''
      for (const content of contents) {
        hashStr += content
      }
      hash = utils.hashHex(hashStr)
    }
    core.setOutput(Outputs.Hash, hash)
    core.setOutput(Outputs.MatchedFiles, files)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
