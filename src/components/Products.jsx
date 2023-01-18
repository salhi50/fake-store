import { memo } from "react";
import ProductBox from "./ProductBox";

const Products = memo(function ({ products , addProductToCart }) {
	return (
		<div className='products-menu row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>
            {products.map((product, indx) => (
                <ProductBox 
                    addProductToCart={addProductToCart}
                    key={indx}
                    product={product}
                />
            ))}
		</div>
	);
})

export default Products;
