import {
  ImageContainer,
  Name,
  Price,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
  CheckoutItemContainer,
} from "./checkout-item.styles";
import { ItemDetails } from "../../store/cart/cart.types.js";
import { useSelector } from "react-redux/es/exports.js";
import { useDispatch } from "react-redux/es/exports.js";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
type CheckoutItemProps = {
  cartItem: ItemDetails;
}
const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHanddler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearItemHanddler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
