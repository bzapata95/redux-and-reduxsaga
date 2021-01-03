import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { spawn } from 'redux-saga/effects';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import { IState } from '../store/modules/rootReducer';


interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product}) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })


  const handleAddProductToCart = useCallback((product: IProduct) => {
    dispatch(addProductToCartRequest(product))
  },[dispatch])

  return (
    <article >
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {" "}

          <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>

          { hasFailedStockCheck && <span style={{color: 'red'}}>No tiene stock</span> }
        </article>
  )
}

export default CatalogItem;