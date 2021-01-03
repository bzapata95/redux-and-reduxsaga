import React from 'react';
import {useSelector} from "react-redux";
import { ICartItem } from '../store/modules/cart/types';
import { IState } from '../store/modules/rootReducer';

// import { Container } from './styles';

const Cart: React.FC = () => {
  const items = useSelector<IState, ICartItem[]>((state) => state.cart.items);

  return (
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.product.id}>
            <td>{item.product.title}</td>
            <td>{item.product.price}</td>
            <td>{item.quantity}</td>
            <td>{item.product.price * item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Cart;