import React from 'react';
import Heading from '../shared/Heading';
import ProductCard from './ProductCard';

// images import
import Img1 from '../../assets/website/product1-smartwatch.png';
import Img2 from '../../assets/website/product2-headphone.png';
import Img3 from '../../assets/website/bag.png';
import Img4 from '../../assets/website/product3-headphone.png';





const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Sony SmartWatches",
    price: "1500",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Boat Headphone",
    price: "1800",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Hand Bags",
    price: "2000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Sony Headphone",
    price: "2000",
    aosDelay: "600",
  },
]
const ProductsData2 = [
  {
    id: 1,
    img: Img1,
    title: "Sony SmartWatches",
    price: "1500",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Boat Headphone",
    price: "1800",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Hand Bags",
    price: "2000",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Sony Headphone",
    price: "2000",
    aosDelay: "600",
  },
]

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* heading section  */}
        <Heading title="Our Products"
          subtitle={"Explore Our Products"}
        />

        {/* body section */}
        <ProductCard data={ProductsData} />   
        <ProductCard data={ProductsData2} />

        

      </div>
    
    </div>
  )
}

export default Products
  