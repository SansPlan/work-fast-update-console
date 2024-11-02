import { defineStore } from 'pinia'

export interface ConfigStoreState {
  urls: ConfigStateUrls
}

export interface ConfigStateUrls {
  requestUrl: string
}

export interface ConfigStoreGetters extends ObjectAny {
  getRequestUrl: (state: ConfigStoreState) => string
}

export interface ConfigStoreActions {
  setRequestUrl: (url: string) => void
}

export const configStoreName = 'NxConsoleConfigStore'

export const useConfigStore = defineStore<
  string,
  Readonly<ConfigStoreState>,
  ConfigStoreGetters,
  ConfigStoreActions
>(configStoreName, {
  state: () => ({
    urls: {
      requestUrl: '',
    },
  }),
  getters: {
    getRequestUrl(state) {
      return state.urls.requestUrl
    },
  },
  actions: {
    setRequestUrl(url: string) {
      this.urls.requestUrl = url
    },
  },
})
