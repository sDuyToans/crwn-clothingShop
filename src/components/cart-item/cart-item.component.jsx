import { CartItemContainer, ItemDetail} from  './cart-item.styles.jsx';

const CartItem = ({ cartItem }) =>{
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