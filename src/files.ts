import {Options, globby} from '@cjs-exporter/globby'
import * as fs from 'fs'

export async function getFiles(
  workdir: string,
  patterns: string[],
  options?: Options
): Promise<string[]> {
  return new Promise(async RES => {
    const paths = await globby(
      patterns.map(item => {
        return workdir + item
      }),
      options
    )
    RES(paths)
  })
}

export async function readFile(path: string): Promise<string> {
  return fs.promises.readFile(path, 'utf-8')
}
