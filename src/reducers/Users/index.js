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
    },
    {
      isSelected : false,
      label : 'Alamat RUmah',
      asName : 'Ikka Nur',
      province : {
        province_id:'10',province:'Jawa Tengah'
      },
      city : {
        city_id:'105', city_name: 'Cilacap', postal_code: '53211'

      },
      phoneNumber : '0999999990909',
      detailAddress : 'Jl. Merpati Gg. Elang 4, No. 25, Desa mawar, Kec. Turi Kab. Cilacap'
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
    case 'ON_CHANGE_DEFAULT_ADDRESS':{
        const index = action.payload
        const {address} = state

        const setIndexToDefault = address.map((obj, i) => {

          if (i == index) {
            obj.isSelected = true
          }else{
            obj.isSelected = false
          }

          return obj
        })

        return {
          ...state,
          address : setIndexToDefault
        }
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
