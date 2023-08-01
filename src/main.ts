import * as core from '@actions/core'
import {Inputs, Outputs} from './constants'
import * as utils from './utils'
import {getFiles, readFile} from './files'
import {hashHexAsync} from './utils'

async function run(): Promise<void> {
  try {
    let workdir: string = utils.getInput(Inputs.Workdir, {required: true})
    const patterns = utils.getInputAsArray(Inputs.Patterns, {
      required: true
    })
    const gitignore = utils.getInputAsBool(Inputs.Gitignore) || true
    const ignoreFiles = utils.getInputAsArray(Inputs.IgnoreFiles)

    if (!workdir.endsWith('/')) {
      workdir += '/'
    }

    core.debug(`workdir: ${workdir}`)
    core.debug(`patterns: ${patterns}`)
    core.debug(`gitignore: ${gitignore}`)
    core.debug(`ignoreFiles: ${ignoreFiles}`)

    const files = await getFiles(workdir, patterns, {gitignore, ignoreFiles})
    let hash = ''

    const reads = files.map(async file => readFile(file))
    const fileContents = await Promise.all(reads)
    const contents = await Promise.all(
      fileContents.map(async fileContent => hashHexAsync(fileContent))
    )

    if (contents.length === 1) {
      hash = contents[0]
    } else if (contents.length > 1) {
      let hashStr = ''
      for (const content of contents) {
        hashStr += content
      }
      hash = utils.hashHex(hashStr)
    }

    core.info('')
    core.info('MatchedFiles:')
    core.info(`  ${files.toString()}`)

    core.info(`Hash: ${hash}`)

    core.setOutput(Outputs.Hash, hash)
    core.setOutput(Outputs.MatchedFiles, files)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
