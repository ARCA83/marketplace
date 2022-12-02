import { Stack } from "@mui/material";
import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

export default function SingleProduct({ product, matches }) {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="raw">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart variant="contained">COMPRAR</ProductAddToCart>
    </>
  );
}
