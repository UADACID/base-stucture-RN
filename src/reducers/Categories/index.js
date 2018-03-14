const defaultValue = [
  {
    "id":"01",
    "name":"Tas",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-bag.png?alt=media&token=30712a42-9c72-491b-b83d-1b5fbd5fa221"
  },
  {
    "id":"02",
    "name":"Kanvas",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-canvas.png?alt=media&token=2848e423-42f8-4ea3-9c32-b56250fdadb2"
  },
  {
    "id":"03",
    "name":"Casing",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-casing.png?alt=media&token=fff02b40-4e79-4c95-b07a-b50f5038e148"
  },
  {
    "id":"04",
    "name":"Hat",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-hat.png?alt=media&token=e9ea99f8-41c2-40d7-be4f-534ca2b50a2e"
  },
  {
    "id":"05",
    "name":"Mug",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-mug.png?alt=media&token=9a60c87b-791b-4693-b508-c3d93f4afa1c"
  },
  {
    "id":"06",
    "name":"Bantal",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-pillow.png?alt=media&token=92003e05-e393-42e7-8459-fa361628410b"
  },
  {
    "id":"07",
    "name":"Pin",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-pin.png?alt=media&token=c305ee62-1974-435f-a172-5ee76bc01aea"
  },
  {
    "id":"08",
    "name":"Kaos",
    "image_url":"https://firebasestorage.googleapis.com/v0/b/fifilio-backend.appspot.com/o/categories%2FIcon-tshirt.png?alt=media&token=16db47e6-e183-405b-a099-5e9df25af3be"
  }
]

const initialState = [...defaultValue]

export const categoriesReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return action.payload
      break;
    default:
      return state
  }
}
