import { styled } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsCard } from "src/constants";
import { getProducts } from "src/redux/apiCalls";
import { RootState } from "src/redux/store";
import { ProductCard } from "./common/ProductCard";

const PREFIX = "CatalogSection";

const StyledSliderSection = styled("section", {
  name: `${PREFIX}-StyledSection`,
})(({ theme }) => ({
  padding: theme.spacing(17, 10, 8),
  background: theme.palette.secondary.light,
}));

export const CatalogSection = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  return (
    <StyledSliderSection>
      {products.map((product: ProductsCard) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </StyledSliderSection>
  );
};
