import {GatsbyBrowser} from 'gatsby'

import {Dashboard} from '../../containers/dashboard/index'
import {JaenProvider} from '../providers/JaenProvider'
import {JaenPluginOptions} from '../types'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = (
  {element},
  pluginOptions: JaenPluginOptions
) => {
  const {templates} = pluginOptions

  return (
    <>
      <Dashboard />
      <JaenProvider templatesPaths={templates.paths}>{element}</JaenProvider>
    </>
  )
}
