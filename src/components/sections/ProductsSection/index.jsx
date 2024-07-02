import ProductCard from "./ProductCard"
import { products } from "../../../data";

const ProductSection = () => {
    // Retorno JSX
    return (
        <section>
            <h2>PRODUTOS EM DESTAQUE</h2>
            <ul>
                {products.map(el => <ProductCard img= {el.img} name={el.name} price={el.price}/>)}
            </ul>
        </section>
    )
}

export default ProductSection;