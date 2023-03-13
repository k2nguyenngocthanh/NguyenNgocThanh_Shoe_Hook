import React from 'react'
import ItemShoe from './ItemShoe';


export default function ListShoe(props) {
    let {list,handleAddToCart} = props;
  return (
    <div className='row'>
      {
        list.map((shoe) =>{
          return <ItemShoe
          handleAddToCart = {handleAddToCart}
          item={shoe}/>
        })
      }
       
    </div>
  )
}
