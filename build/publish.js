import execa from 'execa'
import { resolve } from 'path'
import { getModuleName } from './utils/argv'

const rootPath = resolve(__dirname, '../')
const moduleName = getModuleName() || ''

const publish = async () => {
  try {
    // 编译
    await execa('npm', ['run', 'build'], {
      cwd: rootPath,
      stdio: 'inherit',
      env: {
        NODE_ENV: 'production',
        MODULE_NAME: moduleName
      }
    })
  } catch (e) {
    return e
  }
}

publish()
