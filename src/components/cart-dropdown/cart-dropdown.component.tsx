import { CartDropdownContainer, EmptyMessage, CartItems } from  "./cart-dropdown.styles";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () =>{
    navigate('/checkout');
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length 
          ? cartItems.map((item) => 
            <CartItem key={item.id} cartItem={item} />
          )
          : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={goToCheckOutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropDown;
