import { RequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'

function request(config: RequestConfig) {
  processConfig(config)
  xhr(config)
}

function processConfig(config: RequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: RequestConfig): string {
  const {url, params} = config
  return buildURL(url, params)
}

function transformRequestData(config: RequestConfig): any {
  return transformRequest(config)
}

export default request
