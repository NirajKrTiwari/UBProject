import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId:process.env.PROJECT_ID,
    dataset: 'production'
  }
})
