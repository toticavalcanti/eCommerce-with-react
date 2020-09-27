import React from 'react';

const productId = props.match.params.id;
const qty = props.location.search? Number(props.location.search.split("=")[1]):1;

useEffect(() => {
  if(productId){
    dispatch(addToCart(productId, qty));
  }
}, [])

function CartScreen(props){
  return<div>
    Cart Screen
  </div>
}

export default CartScreen;