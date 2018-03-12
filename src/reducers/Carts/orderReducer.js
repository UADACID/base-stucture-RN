
const defaultValue = [
  {
    index:0,
    title:'Kaos Oblong',
    images:null,
    qtySizeS:0,
    qtySizeM:0,
    qtySizeL:0,
    qtySizeXL:0,
    qtySizeXXL:0,
    valueOfSizeS:0,
    valueOfSizeM:0,
    valueOfSizeL:0,
    valueOfSizeXL:0,
    valueOfSizeXXL:0,
    price:0
  },
  {
    index:1,
    title:'Kaos Oblong',
    images:null,
    qtySizeS:0,
    qtySizeM:0,
    qtySizeL:0,
    qtySizeXL:0,
    qtySizeXXL:0,
    valueOfSizeS:0,
    valueOfSizeM:0,
    valueOfSizeL:0,
    valueOfSizeXL:0,
    valueOfSizeXXL:0,
    price:0
  },
]

const initialState = []

const orderReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case "ADD_ORDER":
        let value = action.payload
        let index = state.length
        value.index = index
        return state.concat([value])
      break;
    case "REMOVE_ORDER":
        let orderIndex = action.payload
        const newState = state.filter(obj => obj.index !== orderIndex)
        return newState
      break;
    case "CHANGE_NUMBER_SIZE_ORDER":{
        const { orderIndex, key, value } = action.payload
        const completedKey = `valueOfSize${key}`
        // console.log({ orderIndex, key, value });
        // console.log({completedKey});
        const newState = state.map(obj => {
          if (obj.index == orderIndex) {
            obj[completedKey] = value
          }
          return obj
        })
        return newState}
      break;
    default:
      return state
  }
}

export default orderReducer
