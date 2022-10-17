import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CategoryItem } from "../../store/categories/categories.types";
import { ProductCardContainer, FooterProductCard, ImgProductCard, NameFooterProductCard, PriceFooterProductCard} from "./product-card.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

type ProductCardProps = {
  product: CategoryItem
}

const ProductCard = ({ product }: ProductCardProps) => {
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
