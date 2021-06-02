import axios from 'axios'

//Constantes
//Este estado que va a tener la lista 

const dataInitial = {
    array:[]
}

////types 
const LISTA_API = "LISTA_API";


//Reducers
//El reducer va a aceptar esa lista de datos y los va a enviar a una constante o nuestro estado
export default function shopingReducer(state = dataInitial, action){
    switch(action.type){
        case 'LISTA_API':
            return {
                ...state,
                array: action.payload
            }
            default:
                 return state

    }

}

//Actions
//Las acciones van a consumir la api por ejemplo.Esta lista de datos se le pasa al reducer
//En la primera funcion de flecha, recibo los parametros que necesitamos enviar en la funcion 
// "obtenerListApiAction" hay funciones q no necesitan estos primeros parametros, esta no los necesita
// la segunda funcion flecha si necesita los parametros, estos son dispatch y getState.
//Con el dispatch nosotros activamos el reducer (ShopingReducer) y con el getState vamos a poder
//obtener la dataInicial(el estado inicial, la informacion q se esté amacenando en ese estado).
//Como vamos a llamar a api, vamos a hacer unasync await
export const obtenerListApiAction = ()=> async(dispatch, getState)=>{
try{
    const res = await axios.get(`https://fakestoreapi.com/products`)
    dispatch({
        type:LISTA_API,
        payload: res.data
    })

}catch(error){
    console.log(error)
}

}

///Nosoros hacemos acciones, esas acciones se procesan en e reducer con los casos, que podemos tener varios
//y eso va a retornar una accion que va a modificar nuestro estado