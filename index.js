const handler = {
  apply(target, prop, args) {
    const result = Reflect.apply(target, prop, args)
    if (result.then) {
      return result.then(v => [v, null]).catch(error => [null, error])
    }
    if (result instanceof Error) {
      return [null, result]
    }
    return [result, null]
  },
}

module.exports = target => {
  return typeof target === 'function' ? new Proxy(target, handler) : target
}
