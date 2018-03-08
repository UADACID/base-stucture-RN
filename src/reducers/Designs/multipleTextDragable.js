import { customMutationState, mutationState } from '../../utils'

const defaultText = {
  productId : null,
  text : 'YOUR TEXT',
  fontFamily : 'Jura-Reguler',
  fontSize : 20,
  fontColor : '#34495e',
  fontLength : 100,
  top : 0,
  left : 0,
  rotate : '0deg',
  scale: 1,
  isActive : true,
  isDeleted : false
}

const initialState = {
  activeIndex : 0,
  texts : []
}

const multipleTextDragable = ( state = initialState, action ) => {
  const { type, payload } = action
  switch (type) {

    case 'ADD_FIRST_TEXT': {
      const newDefaultText = {
        ...defaultText,
        fontSize : 12,
        text:payload
      }

      // console.log(newDefaultText);
      const newTexts = state.texts.concat([newDefaultText])
      const activeIndex = newTexts.length - 1
      const newState = mutationState({texts:newTexts, activeIndex})

      return newState
    }
    break;
    case 'ADD_NEW_TEXT': {
      const newDefaultText = {
        ...defaultText,
        text:payload
      }

      console.log(newDefaultText);
      const newTexts = state.texts.concat([newDefaultText])
      const activeIndex = newTexts.length - 1
      const newState = mutationState({texts:newTexts, activeIndex})

      return newState
    }
    break;
    case 'CHANGE_TEXT_OBJECT_CLICKED':{
      const indexClicked = action.payload
      const newState = mutationState({texts:state.texts, activeIndex : indexClicked})

      return newState
    }
    break
    case 'CHANGE_FONT_STYLE':{
      const { fontFamily, indexClicked } = action.payload
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontFamily',
        value:fontFamily
      })
      return newState
    }
    break
    case 'CHANGE_FONT_COLOR':{
      const { fontColor, indexClicked } = action.payload
      console.log({ fontColor, indexClicked });
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontColor',
        value:fontColor
      })
      return newState
    }
    break
    case 'CHANGE_FONT_SIZE':{
      const { fontSize, indexClicked } = action.payload
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontSize',
        value:fontSize
      })
      return newState
    }
    break
    case 'CHANGE_FONT_LENGTH':{
      const { fontLength, indexClicked } = action.payload
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:indexClicked,
        key:'fontLength',
        value:fontLength
      })
      return newState
    }
    break
    case 'CHANGE_FONT_TEXT':{
      const { text, activeIndex } = action.payload
      console.log({ text, activeIndex });
      const newState = customMutationState({
        texts:state.texts,
        activeIndex:activeIndex,
        key:'text',
        value:text
      })
      return newState
    }
    break
    case 'CHANGE_POSITION_TEXT':{
      const { left, top, scale, rotate, activeIndex } = action.payload
      const {texts} = state

      const newArray = texts.map((obj, i) => {
        if (i == activeIndex) {
          obj = {...obj, left, top, scale, rotate}
        }else{
          obj = {...obj}
        }

        return obj
      })

      const newState = {
        activeIndex,
        texts:newArray
      }

      return newState
    }
    break
    case 'REMOVE_TEXT_SELECTED':{
      const indexClicked = action.payload
      // console.log(indexClicked);
      let newTexts = state.texts
      newTexts[indexClicked].isDeleted = true
      let newTextsFilter = newTexts.filter(obj => obj.isDeleted == false)
      let newActiveIndex = null
      if (newTextsFilter.length == 0) {
        newActiveIndex = null
      }else{
        newTexts[0].isActive = true
        newActiveIndex = 0
      }


      const newState = {
        ...state,
        activeIndex:newActiveIndex,
        texts : newTexts
      }
      return newState
    }
    break
    case 'CLEAR_ALL_ACTIVE_TEXT':{
      const indexClicked = action.payload
      // console.log(indexClicked);
      let newTexts = state.texts.map(obj=> {
        return {...obj, isActive:false}
      })
      // newTexts[indexClicked].isDeleted = true
      // newTexts[0].isActive = true
      // // console.log(newTexts);
      const newState = {
        ...state,
        activeIndex:null,
        texts : newTexts
      }
      return newState
    }
    break
    case 'CLEAR_MULTIPLE_TEXT':{
      return initialState
    }
    break
    default:
      return state
  }

}

export default multipleTextDragable
