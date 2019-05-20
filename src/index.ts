import { RequestConfig } from './types'
import xhr from './xhr'

function request(config: RequestConfig) {
  xhr(config)
}

export default request
