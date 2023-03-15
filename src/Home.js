import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  // const [record, setRecord] = useState([]);
  // const now = useRef(false);
  // useEffect(() => {
  //   if (now.current === true) {
  //     fetch("http://localhost:9000/api/abc", {})
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setRecord(data);
  //       });
  //   }
  //   return () => {
  //     now.current = true;
  //   };
  // });
  return (
    <div className="Home">
      <div className="Home__container">
        <img
          src="img/amazon-e-commerce-company-csw7ypxppsqd7yyr.jpg"
          className="Home__img"
          alt=""
        />
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions Paperback – 1 January 2023"
            price={99.79}
            rating={4}
            img="https://m.media-amazon.com/images/I/41RwQlo446L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id={Math.random()}
            title="Noise Pulse 2 Max Advanced Bluetooth Calling Smart Watch with 1.85'' Display, 550 NITS Brightness, Smart DND, 10 Days Battery, 100 Sports Modes, Smart Watch for Men and Women - (Jet Black)"
            price={499.99}
            rating={5}
            img="img/41u0PC4NajL._AC_UF226,226_FMjpg_.jpg"
          />
        </div>
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="Samsung Galaxy Tab A8 26.69cm (10.5 inch) Display, RAM 4 GB, ROM 64 GB Expandable, Wi-Fi Tablet, Gray, (SM-X200NZAEINU)"
            img="img/91veRYPjpeL._SL1500_.jpg"
            price={299}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="OnePlus 11 5G (Eternal Green, 8GB RAM, 128GB Storage) Upto 18M No Cost EMI with ICICI Amazon Pay Credit Card"
            img="img/61amb0CfMGL._SX679_.jpg"
            price={799.67}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
            img="img/61RZDb2mQxL._SX679_.jpg"
            price={599.03}
            rating={4}
          />
        </div>
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            img="img/71MlcO29QOL._SL1500_.jpg"
            price={1599}
            rating={5}
          />
        </div>
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)
            "
            img="https://m.media-amazon.com/images/I/61WUqJd4dfS._SX679_.jpg"
            price={322.87}
            rating={5}
          />
          <Product
            id={Math.random()}
            title="OnePlus 80 cm (32 inches) Y Series HD Ready LED Smart Android TV 32Y1 (Black)"
            img="https://m.media-amazon.com/images/I/71d5fMDvq9L._SX522_.jpg"
            price={499}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="Intex 98 cm (40 inches) HD Ready Smart LED TV Smart LED-SH4033 (Black)"
            img="https://m.media-amazon.com/images/I/61-yWK4-8vL._SX522_.jpg"
            price={499.15}
            rating={4}
          />
        </div>
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="Samsung Galaxy Buds2 Pro, Bluetooth Truly Wireless in Ear Earbuds with Noise Cancellation (Bora Purple, with Mic)"
            img="https://m.media-amazon.com/images/I/61KVX-MbIUL._SX522_.jpg"
            price={189.93}
            rating={5}
          />
          <Product
            id={Math.random()}
            title="Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            img="https://m.media-amazon.com/images/I/41QPv5h1veL._SX300_SY300_QL70_FMwebp_.jpg"
            price={1199}
            rating={5}
          />
        </div>
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="CHIST i7 Extreme Gaming Pc (Core i7 860/16GB Ram/ 512GB SSD/ 1TB Hard Disk/GT 730 4GB Graphic Card /20 inch HD Monitor/Gaming Keyboard Mouse/WiFi/Speaker Free Gifted Ready to Use)"
            img="https://m.media-amazon.com/images/I/414Pm0x89jL.jpg"
            price={499.76}
            rating={4}
          />
        </div>
        <div className="Home__item">
          <Product
            id={Math.random()}
            title="Samsung Galaxy Watch5 LTE (44 mm, Sapphire, Compatible with Android only)"
            img="https://m.media-amazon.com/images/I/61aVQDazNHL._SX522_.jpg"
            price={899}
            rating={5}
          />
          <Product
            id={Math.random()}
            title="Samsung Galaxy Watch4 Bluetooth(4.4 cm, Black, Compatible with Android onl"
            img="https://m.media-amazon.com/images/I/61aVQDazNHL._SX522_.jpg"
            price={499.23}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="Apple iPhone 14 512GB Blue"
            img="https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg"
            price={1399.04}
            rating={4}
          />
          <Product
            id={Math.random()}
            title="Prime Music With your Prime membership, enjoy ad-free music streaming with unlimited offline downloads* "
            img="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Robin_Benefit2._CB623228312_.jpg"
            price={49}
            rating={4}
          />
        </div>
      </div>
      {/* <div className="Home__container">
        <img
          src="img/amazon-e-commerce-company-csw7ypxppsqd7yyr.jpg"
          className="Home__img"
          alt=""
        />
        {record.map((result) => (
          <div className="Home__item">
            <Product
              title={result.title}
              price={result.price}
              img={result.img}
              id={result._id}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Home;
