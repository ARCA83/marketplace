import { Product,ProductImage,ProductMeta } from "../../styles/Products"

export default function SingleProduct({product, matches}){
    
    return(
        <Product>
            <ProductImage src={product.image}/>
            <ProductMeta product={product} matches={matches}/>
        </Product>

    )

}