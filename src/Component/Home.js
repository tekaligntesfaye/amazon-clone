import React from 'react'
import './Home.css'
import Product from './Product'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" },
  { url: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" }
  // { url: "images/5.jpg" },
  // { url: "images/6.jpg" },
  // { url: "images/7.jpg" },
];


function Home() {
  
  return (
    <div className='home'>
        <div className='home_container'>
        <SimpleImageSlider
        width={'100%'}
        height={300}
        images={images}
        slideDuration = {2}
        autoPlay={true}
        autoPlayDelay = {2}
        showBullets={true}
        showNavs={true}

      />
        {/* <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg"
          alt=""
        /> */}
      
        <div className="home_row">
          <Product
            id="12321341"
            title="Yes, I See You Hardcover – Picture Book, August 1, 2022"
            price={18.99}
            rating={5}
            catagory='book'
            image="https://images-na.ssl-images-amazon.com/images/I/51tm6gDWCOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="Zebra Z-Grip Mechanical Pencil, 0.7mm Point Size, HB #2 Graphite, Black Grip, 24 Pack"
            price={8.99}
            rating={4}
            catagory='book'
            image="https://m.media-amazon.com/images/I/91wgWvRqHWL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            catagory='electronics'
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301"
            price={298.00}
            rating={4}
            catagory='fitness'
            image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="UGREEN Nexode 100W USB C Wall Charger - 4-Port GaN PD Fast Charger USB-C Power Adapter Compatible with MacBook Pro/Air, Dell XPS, iPad Mini/Pro, iPhone 13/13 Pro Max/iPhone 12, Galaxy S22/S21, Pixel"
            price={55.99}
            rating={4}
            catagory='electronics'
            image="https://m.media-amazon.com/images/I/616odiERxdL._AC_UL320_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="90829332"
            title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black, QHD, 120Hz"
            price={379.00}
            rating={4}
            catagory='electronics'
            image="https://m.media-amazon.com/images/I/818jj0DF-dL._AC_SL1500_.jpg"
          />
          <Product
            id="90829555"
            title="'Sceptre 24' Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
            price={549.99}
            rating={4}
            catagory='electronics'
            image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
          />
          
        </div>
        </div>
    </div>
  )
}

export default Home