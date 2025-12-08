export const sanitize = (obj: any): any => {
  if (typeof obj === 'bigint') return obj.toString()
  if (Array.isArray(obj)) return obj.map(sanitize)
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, sanitize(v)]))
  }
  return obj
}
