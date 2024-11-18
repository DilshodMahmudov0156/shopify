import React from 'react';
import Card from "../product-card/card";
import { useStore } from "../../../store/index";

const Products: React.FC = () => {
    const { products } = useStore();

    return (
        <>
            <h1 className="section-heading">Our Products</h1>
            <div className="row">
                {
                    products.map((item) => {
                        return(
                            <Card key={item.id} element={item} />
                        )
                    })

                }
            </div>
        </>
    );
}

export default Products;