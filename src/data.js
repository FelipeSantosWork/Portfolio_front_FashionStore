import CategoryImg1 from "./assets/category1.png"
import CategoryImg2 from "./assets/category2.png"

import ProductImg2 from "./assets/product2.jpg"
import ProductImg1 from "./assets/product1.jpg"
import ProductImg3 from "./assets/product3.jpg"
import ProductImg4 from "./assets/product4.jpg"


const categories = [
    { img: CategoryImg1, name: "Sapatos" },
    { img: CategoryImg2, name: "Bolsas" },
];

const products = [
    { img: ProductImg1, name: "Blazer Branco Elegante", price: "R$ 490,00" },
    { img: ProductImg2, name: "Sapatos Amarelos", price: "R$ 490,00" },
    { img: ProductImg3, name: "Blazer Laranja", price: "R$ 320,00" },
    { img: ProductImg4, name: "Calça Preta", price: "R$ 140,00" },
];

export {categories, products}