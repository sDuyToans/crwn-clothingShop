import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useDispatch } from "react-redux";
import { getCategoriesandDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoriesAsync } from "../../store/categories/categories.action";
import { useEffect } from "react";
// import { ProductContainer } from './shop.styles.jsx';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [])
  return (
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
  );
};

export default Shop;
