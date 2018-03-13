const initialState = {
  provinces : [],
  selectedProvince : null,
  cities : [],
  selectedCity : null,
  prices : [],
  courier : null
}

export const shipping = (state= initialState, action) => {
  switch (action.type) {
    case "GET_PROVINCES":
      const provinces = action.payload
      return {
        ...state,
        provinces:[...provinces]
      }
      break;
    case "GET_CITIES":
      const cities = action.payload
      return {
        ...state,
        cities
      }
      break;
    case "GET_PRICES":
      const prices = action.payload
      return {
        ...state,
        prices:prices[0].costs
      }
      break;
    case "ON_SELECTED_PROVINCE":
      const selectedProvince = action.payload
      return {
        ...state,
        selectedProvince
      }
      break;
    case "ON_SELECTED_CITY":
      const selectedCity = action.payload
      return {
        ...state,
        selectedCity
      }
      break;
    case "ON_SELECTED_COURER":
      const courier = action.payload
      return {
        ...state,
        courier
      }
      break;
    default:
      return state
  }
}
