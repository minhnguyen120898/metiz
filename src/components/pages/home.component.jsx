import React from 'react'
import Sliders from '../home/slider';
import ProductSlider from '../home/productSlider';
import News from '../home/news';
import Footer from '../partials/footer.component';
import Header from '../partials/Header/header.component';
const Home = () => {
     return (
          <div className="wrapper">
               <Header/>
               <main>
                    <Sliders/>
                    <ProductSlider/>
                    <News/>
               </main>
               <Footer />
          </div>
     )
}

export default Home;