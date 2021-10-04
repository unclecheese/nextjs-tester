import cacheManifest from "cache"
import projectConfig from "ss-config"
import { createPage } from "@silverstripe/nextjs-toolkit"
import {
  getStaticProps as createGetStaticProps,
  getStaticPaths as createGetStaticPaths,
} from "@silverstripe/nextjs-builder"
// @ts-ignore
import glob from "glob"
import { getCacheDir } from "@silverstripe/nextjs-builder"
const project = {
  projectConfig,
  cacheManifest,
}

const d = createGetStaticProps(project)
export const getStaticProps = async (context: any) => {  
  const files = glob.sync(`${getCacheDir()}/*.json`, { dot: true })
  throw new Error(JSON.stringify(files))
  const r = await d(context)

  return r
}
export const getStaticPaths = createGetStaticPaths(project)

const Page = createPage(project)

export default Page
