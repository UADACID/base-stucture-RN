const initialState = {
  email : 'pratamasetya99@gmail.com',
  password : '2wsx1qaz',
  address : [
    {
      isSelected : true,
      label : 'Alamat Utama',
      asName : 'Pratama Setya Aji',
      province : {
        province_id:'5',province:'DI Yogyakarta'
      },
      city : {
        city_id:'419', city_name: 'Sleman', postal_code: '55513'

      },
      phoneNumber : '085641560181',
      detailAddress : 'Kp. Raksa, Jl. Anyelir No. 01, RT.04/RW.17, Kec. Indah, Kab. Sleman'
    }
  ]
}

export const userReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'INSERT_USER_DATA':
      const userData = action.payload
      return {
        ...userData
      }
      break;
    case 'ADD_ADDRESS_USER_':
      const newAddress = action.payload

      const oldAddress = state.address
      const address = oldAddress.concat([newAddress])
      return {
        ...state,
        address
      }
      break;
    default:
      return state
  }
}
