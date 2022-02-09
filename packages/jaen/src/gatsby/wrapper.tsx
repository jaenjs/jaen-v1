import {SnekFinder} from '@jaen/withSnekFinder'
import {GatsbyBrowser} from 'gatsby'
import {PluginProvider} from 'react-pluggable'
import {pluginStore} from '..'
import AdminToolbar from '../ui/AdminToolbar'

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = (
  {element},
  ...rest
) => {
  const elem = (
    <PluginProvider pluginStore={pluginStore}>
      <SnekFinder>{element}</SnekFinder>
    </PluginProvider>
  )

  return elem
}
