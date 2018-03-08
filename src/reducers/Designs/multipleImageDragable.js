const defaultImage = {
  productId : null,
  url : null,
  top : 0,
  left : 0,
  width : null,
  height : null,
  rotate : '0deg',
  scale: 1,
  isActive : true,
  isDeleted : false,
  type : null
}

const initialState = {
  activeIndex : 0,
  images : []
}

const multipleImageDragable = ( state = initialState, action ) => {
  switch (action.type) {
    case "ADD_NEW_IMAGE":
      const { url, type } = action.payload
      const { images } = state
      if (images.length == 0) {
        return {
          activeIndex:0,
          images:[{...defaultImage, url, type}]
        }
      }
      return {
        activeIndex:0,
        images:[{...images[0], url, type}]
      }
      break;
    case 'REMOVE_IMAGE_SELECTED':{
      const indexClicked = action.payload
      return {
        activeIndex:0,
        images : []
      }
    }
    break
    case "CLEAR_ALL_IMAGE":
      return {
        activeIndex:0,
        images : []
      }
      break;
    case 'CLEAR_ALL_ACTIVE_IMAGE':{
      let newImage = state.images.map(obj=> {
        return {...obj, isActive:false}
      })
      // newTexts[indexClicked].isDeleted = true
      // newTexts[0].isActive = true
      // // console.log(newTexts);
      const newState = {
        ...state,
        activeIndex:null,
        images : newImage
      }
      return newState
    }
    break
    case 'CHANGE_IMAGE_OBJECT_CLICKED':{
      const indexClicked = action.payload
      const newImages = state.images.map((obj,i) => {
        if (i == indexClicked) {
            obj = {...obj, isActive:true}
        }else{
          obj = obj
        }

        return obj
      })

      const newState = {
        ...state,
        activeIndex:indexClicked,
        images:newImages
      }

      return newState
    }
    break
    case 'CHANGE_POSITION_IMAGE':{
      const { left, top, scale, rotate, activeIndex } = action.payload
      const {images} = state

      const newArray = images.map((obj, i) => {
        if (i == activeIndex) {
          obj = {...obj, left, top, scale, rotate}
        }else{
          obj = {...obj}
        }

        return obj
      })

      const newState = {
        activeIndex,
        images:newArray
      }

      return newState
    }
    break
    default:
      return state
  }
}

export default multipleImageDragable
