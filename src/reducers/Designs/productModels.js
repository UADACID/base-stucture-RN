const defaultModels = [
  {
    id:1,
    name:'Pria kerah O',
    type:null,
    categoryId:1
  },
  {
    id:2,
    name:'Pria kerah V',
    type:null,
    categoryId:1
  }
]


const initialState = {
  selectedId:defaultModels[0].id,
  models:[
    ...defaultModels
  ]
}


const productModels = ( state = initialState, action ) => {

  switch (action.type) {
    case "CHANGE_SELECTED_MODEL":
      return {
        ...state,
        selectedId:action.payload
      }
      break;
    default:
      return state
  }

}

export default productModels
