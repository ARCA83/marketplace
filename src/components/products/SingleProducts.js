import { Product,ProductImage } from "../../styles/Products"

export default function SingleProducts({product, matches}){
    
    return(
        <Product>
            <ProductImage src={product.image}/>
        </Product>

    )

}