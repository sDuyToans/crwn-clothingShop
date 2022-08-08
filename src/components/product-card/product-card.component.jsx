import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, FooterProductCard, ImgProductCard, NameFooterProductCard, PriceFooterProductCard} from "./product-card.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action.js";
import { selectCartItems } from "../../store/cart/cart.selector.js"

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  return (
    <ProductCardContainer>
      <ImgProductCard src={imageUrl} alt={`${name}`} />
      <FooterProductCard>
        <NameFooterProductCard>{name}</NameFooterProductCard>
        <PriceFooterProductCard>{price}</PriceFooterProductCard>
      </FooterProductCard>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};
export default ProductCard;
