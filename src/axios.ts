import { AxiosInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

function creteInstance(): AxiosInstance {
  let context = new Axios()
  let instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = creteInstance()

export default axios
