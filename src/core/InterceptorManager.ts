import { AxiosRequestConfig, RejectedFn, ResolvedFn } from '../types'

export interface Interceptor<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorManager<T> {
  private intercpetors: Array<Interceptor<T> | null>

  constructor() {
    this.intercpetors = []
  }

  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.intercpetors.push({
      resolved,
      rejected
    })

    return this.intercpetors.length - 1
  }

  eject(id: number): void {
    if (this.intercpetors[id]) {
      this.intercpetors[id] = null
    }
  }

  forEach(fn: (interceptor: Interceptor<T>) => void): void {
    this.intercpetors.forEach(interceptor => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }
}
