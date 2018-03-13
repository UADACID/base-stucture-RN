import axios from 'axios'

export const shippingAction = ({dispatch, config, type}) => {
    dispatch({type:'SHOW_OVERLAY'})
    axios(config)
    .then((res)=>{
      const { results } = res.data.rajaongkir
      dispatch({type:type, payload:results})
      dispatch({type:'HIDE_OVERLAY'})
    }).
    catch((err)=>{
      dispatch({type:'HIDE_OVERLAY'})
      console.log(err);
      console.log(JSON.parse(JSON.stringify(err)));
      console.log(err.response);
    })
}
