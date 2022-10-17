import { ItemDetails } from '../../store/cart/cart.types.js';
import { FC } from 'react';
import { CartItemContainer, ItemDetail} from  './cart-item.styles';

type CartItemProps = {
    cartItem: ItemDetails
}

const CartItem : FC<CartItemProps> = ({ cartItem }) =>{
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetail>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </ItemDetail>
        </CartItemContainer>
    )
}

export default CartItem;