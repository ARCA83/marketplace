import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";



export default function Banner() {
  const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <BannerContainer>
      <BannerImage src="/images/banner/baner1.png"/>
      <BannerContent>
        <Typography variant="h6">Ultima Coleccion</Typography>
        <BannerTitle variant="h2">Verano 2023</BannerTitle>
        
        <BannerDescription variant="subtitle">
          Ropa de verano, de entretiempo o para todo el año, las ultimas
          tendencias en ropa para adolescentes las puedes encontrar en esta
          firma especializada en moda.
        </BannerDescription>
        <BannerShopButton color="primary">Show Now </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
