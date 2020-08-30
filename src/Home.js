import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg" alt="" />
            
            <div className="home__row">
                <Product 
                    id="1"
                    title="boAt Airdopes 311V2 True Wireless Ear-Buds with BT V5.0, Up to 15.5H Total Playback, IPX5 Water Resistance, Built-in Mic and Voice Assistant(Active Black)"
                    price={2499}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61kctodzcCL._SL1500_.jpg"
                />
                <Product 
                    id="2"
                    title="BOSS Desire 30L Oven Toaster Griller OTG, with Convection, 1600 W, 5 Heating/Cooking Functions, Black & Silver"
                    price={7799}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/9146KW-o8IL._AC_UY218_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                    id="3"
                    title="iBELL COOLPLUS Air Cooler 22-Litre 3 Speed Inverter Compatible, Water Level Indicator, White Dark Blue"
                    price={5200}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61iuFEnHGHL._AC_UY218_.jpg"
                />
                <Product 
                    id="4"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={23900}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SX466_.jpg"
                />
                <Product 
                    id="5"
                    title="Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={20990}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41apNNfINPL.__AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="6"
                    title='ASUS TUF Gaming A15 Laptop 15.6" FHD 144Hz Ryzen 5 4600H, GTX 1650Ti 4GB Graphics (8GB RAM/1TB HDD + 256GB NVMe SSD/Windows 10/Bonfire Black/2.30 Kg), FA506II-AL117T'
                    price={107010}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/A1A2yQlAXCL._SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
