const handler = {
  apply(target, prop, args) {
    const result = Reflect.apply(target, prop, args)
    return result.then
      ? result.then(v => [v, null]).catch(err => [null, err])
      : result
  },
}

module.exports = target => {
  return typeof target === 'function' ? new Proxy(target, handler) : target
}
