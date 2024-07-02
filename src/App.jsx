import CategorySection from "./components/sections/CategorySection";
import ProductSection from "./components/sections/ProductsSection";
import BannerImg from "./assets/banner.jpg"


function App() {

  return (
    <>
      <header>
        <h1>FASHIONSTORE</h1>
      </header>
      <main>
        {/* seção de banner */}
        <section>
          <img src={BannerImg} alt='#' />
          <div>
            <h1>FASHION STORE</h1>
            <p>Fique por dentro das nossas últimas promoções e novidades</p>
            <button>Confira as OFERTAS</button>
          </div>
        </section>

        {/* seção de categorias */}
        <CategorySection />

        {/* seção de produtos em destaque */}
        <ProductSection />

        {/* seção de inscreva-se newsletter */}
        <section>
          <h2>INSCREVA-SE NA NEWSLETTER</h2>
          <input type="text" placeholder="E-MAIL" />
          <button>CADASTRAR-SE</button>
        </section>

      </main>
      <footer>
        <p>Todos os direitos reservados - Kenzie Academy Brazil</p>
      </footer>

    </>
  );
}

export default App;
