import cacheManifest from "cache"
import projectConfig from "ss-config"
import { createPage } from "@silverstripe/nextjs-toolkit"
import {
  getStaticProps as createGetStaticProps,
  getStaticPaths as createGetStaticPaths,
  getCacheDir,
} from "@silverstripe/nextjs-builder"
import fs from "fs"
// @ts-ignore
import glob from "glob"
const project = {
  projectConfig,
  cacheManifest,
}

const d = createGetStaticProps(project)
export const getStaticProps = async (context: any) => {

  if (!fs.existsSync(`${getCacheDir()}/.availableTemplates.json`)) {
    const f = glob.sync(`${getCacheDir()}/*.*`, { dot: true })
    const yo = fs.existsSync(getCacheDir()) ? `yeah` : `nah`
    const n = glob.sync(`${getCacheDir()}/../src/*.*`)
    throw new Error(`Whoa there... ${getCacheDir()} ${__dirname} ${JSON.stringify(f)} ${yo} ${JSON.stringify(n)}`)
  }
  const r = await d(context)

  return r
}
export const getStaticPaths = createGetStaticPaths(project)

const Page = createPage(project)

export default Page
