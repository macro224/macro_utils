const execa = require('execa')
const path = require('path')
const { getModuleName } = require('./utils/argv')

const rootPath = path.resolve(__dirname, '../')
const moduleName = getModuleName() || ''


const publish = async () => {
  try {
    // 编译
    await execa('npm', ['run', 'build'], {
      cwd: rootPath,
      stdio: 'inherit',
      env: {
        'NODE_ENV': 'production',
        'MODULE_NAME': moduleName
      }
    })
  } catch (e) {
    throw e
  }
}

publish()
