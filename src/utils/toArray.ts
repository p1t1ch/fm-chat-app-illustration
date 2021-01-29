const toArray = <T>(arg: T | T[]): T[] => [].concat(...([arg] as any))

export default toArray
