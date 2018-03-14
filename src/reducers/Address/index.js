const initialState = [
  {
    user_id : '1',
    is_selected : true,
    label : 'Alamat Utama',
    as_name : 'Pratama Setya Aji',
    province_id:'5',
    province_name:'DI Yogyakarta',
    city_id:'419',
    city_name: 'Sleman',
    postal_code: '55513',
    phone_number : '085641560181',
    detail_address : 'Kp. Raksa, Jl. Anyelir No. 01, RT.04/RW.17, Kec. Indah, Kab. Sleman'
  },
  {
    user_id : '1',
    is_selected : false,
    label : 'Alamat RUmah',
    as_name : 'Ikka Nur',
    province_id:'10',
    province_name:'Jawa Tengah',
    city_id:'105',
    city_name: 'Cilacap',
    postal_code: '55513',
    phone_number : '0999999990909',
    detail_address : 'Jl. Merpati Gg. Elang 4, No. 25, Desa mawar, Kec. Turi Kab. Cilacap'
  }
]

export const addressReducer = (state = initialState, action ) => {
  switch (action.type) {
    case "GET_ADDRESS":

      break;
    case "ON_CHANGE_DEFAULT_ADDRESS":{
      const index = action.payload
      const setIndexToDefault = state.map((obj, i) => {
        if (i == index) {
          obj.is_selected = true
        }else{
          obj.is_selected = false
        }

        return obj
      })
      console.log(setIndexToDefault);

      return setIndexToDefault
    }
    break
    default:
      return state
  }
}
