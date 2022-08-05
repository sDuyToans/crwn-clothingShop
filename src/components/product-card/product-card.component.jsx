import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { ProductCardContainer, FooterProductCard, ImgProductCard, NameFooterProductCard, PriceFooterProductCard} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
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
