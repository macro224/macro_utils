import { createConfig } from './utils/config'

const inquirer = require('inquirer')
const { getModulesList } = require('./utils/getModulesList')

const init = async () => {
  const modulesList = await getModulesList()
  const { item } = await inquirer.prompt({
    name: 'item',
    type: 'list',
    choices: modulesList,
    message: '请选择方法包'
  })
  return createConfig(item)
}

export default init()
