// pages
// snekfinder root url
import {store} from '@internal/redux'
import {IJaenPage} from '../../types'

type DataType = {
  pages:
    | {
        [pageId: string]: Partial<IJaenPage>
      }
    | undefined
  snekFinder: {} | undefined
}

const getPagesData = (): DataType['pages'] | undefined => {
  const state = store.getState()
  if (state) {
    const pagesData: DataType['pages'] = state.internal.pages.nodes

    return pagesData
  }
}

const getSnekFinderData = (): DataType['snekFinder'] | undefined => {
  return undefined
}

export const runPublish = async (): Promise<boolean> => {
  const data: DataType = {
    pages: getPagesData(),
    snekFinder: getSnekFinderData()
  }

  console.log('🚀 ~ file: publish.ts ~ line 33 ~ data', data)

  // Simulate a slow process.
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })
}