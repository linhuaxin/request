import { AxiosStatic, AxiosRequestConfig } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'

function creteInstance(config: AxiosRequestConfig): AxiosStatic {
  let context = new Axios(config)
  let instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosStatic
}

const axios = creteInstance(defaults)

axios.create = function(config: AxiosRequestConfig) {
  return creteInstance(mergeConfig(defaults, config))
}

export default axios
