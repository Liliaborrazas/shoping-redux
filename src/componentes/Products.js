import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {obtenerListApiAction} from '../redux/shopingDoc'


const Products = () => {
    const dispatch = useDispatch()
    const products = useSelector(store => store.productsList.array)
    console.log(products)
    return(
        <div>
            Lista de productos
            <button onClick={()=>dispatch(obtenerListApiAction())}>Get products</button>
            <ul>{products.map(item=>{
                return(<li key={item.id}>
                    <div>
                        <img src={item.image}/>
                        <p>{item.description}</p>
                    </div>
                </li>)
            })}</ul>
        </div>
    )
}

export default Products;