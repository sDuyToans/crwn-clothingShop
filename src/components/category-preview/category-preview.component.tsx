import ProductCard from "../product-card/product-card.component";
import { CategoryItem } from "../../store/categories/categories.types";
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from "./category-preview.styles";

type CategoryPreViewProps = {
  title: string,
  products: CategoryItem[],
}

const CategoryPreview = ({ title, products }: CategoryPreViewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
