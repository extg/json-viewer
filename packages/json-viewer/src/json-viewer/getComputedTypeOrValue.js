

import TYPES from './types'

export const getType = (dataObject) => {
  const mapTypes = {
    [TYPES.OBJECT]: 'Object',
    [TYPES.ARRAY]: 'Array',
    [TYPES.NUMBER]: 'Number',
    [TYPES.STRING]: 'String',
    [TYPES.UNDEFINED]: 'Undefined',
    [TYPES.NULL]: 'Null',
    [TYPES.BOOLEAN]: 'Boolean',
    [TYPES.FUNCTION]: 'Function'
  }

  return mapTypes[Object.prototype.toString.call(dataObject)]
}

const getComputedTypeOrValue = (dataObject, isClosed) => {
  switch (getType(dataObject)) {
    case 'Array':
      return `Array(${dataObject.length})`
    case 'Object':
      return isClosed ? JSON.stringify(dataObject) : ''
    case 'String':
      return `"${String(dataObject)}"`
    case 'Number':
    case 'Undefined':
    case 'Null':
    case 'Boolean':
    case 'Function':
    default:
      return String(dataObject)
  }
}

export default getComputedTypeOrValue
