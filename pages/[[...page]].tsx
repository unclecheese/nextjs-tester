import cacheManifest from "cache"
import projectConfig from "ss-config"
import { createPage } from "@silverstripe/nextjs-toolkit"
import {
  getStaticProps as createGetStaticProps,
  getStaticPaths as createGetStaticPaths,
  getCacheDir,
} from "@silverstripe/nextjs-builder"
import fs from "fs"
import path from "path"
// @ts-ignore
import glob from "glob"
const project = {
  projectConfig,
  cacheManifest,
}

const d = createGetStaticProps(project)
export const getStaticProps = async (context: any) => {

  if (true) {
  //if (!fs.existsSync(`${getCacheDir()}/.availableTemplates.json`)) {
    let d = __dirname
    const f = []
    while (d !== '/') {
      f.push(glob.sync(`${d}/*.*`), { absolute: true })
      d = path.dirname(d)
    }
    throw new Error(`Whoa there... ${path.resolve('../.ss-cache')}, ${JSON.stringify(f)}`)
  }
  const r = await d(context)

  return r
}
export const getStaticPaths = createGetStaticPaths(project)

const Page = createPage(project)

export default Page
