import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const DEFAULT_WIDTH_FONT = width/3

const initialState = {
  fontFamily:'Jura-Reguler',
  fontColor:null,
  fontSize:20,
  fontLength: DEFAULT_WIDTH_FONT
}

const textMenu = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case "ON_CHANGE_FONT_FAMILY":
      return {
        ...state,
        fontFamily : payload
      }
      break;
    case "ON_CHANGE_FONT_COLOR":
      return {
        ...state,
        fontColor : payload
      }
      break;
    case "ON_CHANGE_FONT_SIZE":
      return {
        ...state,
        fontSize : payload
      }
      break;
    case "ON_CHANGE_FONT_LENGTH":
      return {
        ...state,
        fontLength : payload
      }
      break;
    case "ON_CHANGE_CLEAR_FONT":
      return initialState
      break;
    default:
      return state
  }
}

export default textMenu
