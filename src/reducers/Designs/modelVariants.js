const defaultVariants = [
  {
    id:1,
    modelId: 1,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fblue-bolong.png?alt=media&token=234da208-b9c6-4f91-86b4-0f21b9d669ee',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fblue.png?alt=media&token=441b1b52-1bf5-41a3-a6e8-8f4078e8a754',
    qty: 102,
    qtySizeS: 0,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#75deff'
  },
  {
    id:2,
    modelId: 1,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fgreen-bolong.png?alt=media&token=92925b04-15ef-4304-a49b-d6ee1e7320d7',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fgreen.png?alt=media&token=f24982d2-ffa8-42a0-adf6-563f7f6cc060',
    qty: 87,
    qtySizeS: 38,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#1ff173'
  },
  {
    id:3,
    modelId: 1,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fviolet-bolong.png?alt=media&token=fc3e154d-fac3-4557-9b3f-98e0b887b025',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fviolet.png?alt=media&token=f93c3b72-7389-4f23-8cea-5b561817d3ff',
    qty: 54,
    qtySizeS: 38,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#dad1ff'
  },
  {
    id:4,
    modelId: 1,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fyellow-bolong.png?alt=media&token=82792d69-b4f0-48fb-8525-2a16de19d93d',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fyellow.png?alt=media&token=74162687-743f-478d-914b-6251185d849f',
    qty: 92,
    qtySizeS: 38,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#f0fd00'
  },

  {
    id:5,
    modelId: 2,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fkerah%2Fkerah-ijo-bolong.png?alt=media&token=424ec766-071e-4f1b-b2a7-7f19e6f7eff9',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fkerah%2Fkerah-ijo.png?alt=media&token=73511a21-0dec-4d22-be5c-f0ec978aae10',
    qty: 92,
    qtySizeS: 38,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#6ef6a9'
  },
  {
    id:6,
    modelId: 2,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fkerah%2Fkerah-oren-bolong.png?alt=media&token=1827c919-5601-4692-81ea-013b395dec09',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fkerah%2Fkerah-oren.png?alt=media&token=737ac90d-88c5-4cec-851b-c7273d24ff53',
    qty: 92,
    qtySizeS: 38,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#f9cc6b'
  },
  {
    id:7,
    modelId: 2,
    price: 50000,
    imageTransparentUrl: 'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fkerah%2Fkerah-ungu-bolong.png?alt=media&token=617af371-5eab-42de-8366-e83b8a33db08',
    imageUrl:'https://firebasestorage.googleapis.com/v0/b/crud-1e50d.appspot.com/o/variants%2Fkerah%2Fkerah-ungu.png?alt=media&token=57655048-7f33-42ce-8be8-4b20d5b2ce22',
    qty: 92,
    qtySizeS: 38,
    qtySizeM: 20,
    qtySizeL: 40,
    qtySizeXL: 15,
    qtySizeXXL: 10,
    color: '#e78dff'
  },

]

const initialState = {
  activeId : defaultVariants[0].id,
  variants : [...defaultVariants]
}

const modelVariants = (state = initialState, action ) => {

  switch (action.type) {
    case "CHANGE_SELECTED_MODEL_VARIANT_COLOR":
      return {
        ...state,
        activeId: action.payload
      }
      break;

    case "SET_SELECTED_MODEL_VARIANT":
      const {variants} = state
      const { modelId } = action
      const filterActiveId = variants.filter(variant => variant.modelId == modelId)[0]
      return {
        ...state,
        activeId: filterActiveId.id
      }
    default:
      return state
  }

}

export default modelVariants
