import * as core from '@actions/core'
import crypto, {BinaryLike} from 'crypto'

export function getInput(name: string, options?: core.InputOptions): string {
  return core.getInput(name, options)
}

export function getInputAsArray(
  name: string,
  options?: core.InputOptions
): string[] {
  return core
    .getInput(name, options)
    .split('\n')
    .map(s => s.replace(/^!\s+/, '!').trim())
    .filter(x => x !== '')
}

export function getInputAsInt(
  name: string,
  options?: core.InputOptions
): number | undefined {
  const value = parseInt(core.getInput(name, options))
  if (isNaN(value) || value < 0) {
    return undefined
  }
  return value
}

export function getInputAsBool(
  name: string,
  options?: core.InputOptions
): boolean {
  const result = core.getInput(name, options)
  return result.toLowerCase() === 'true'
}

export function hashHex(content: BinaryLike, shaAlgorithm = 'sha256'): string {
  return crypto.createHash(shaAlgorithm).update(content).digest('hex')
}
