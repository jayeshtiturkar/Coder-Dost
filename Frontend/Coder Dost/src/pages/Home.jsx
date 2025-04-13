import React, { useEffect, useState } from 'react'
import PostLayout from './PostLayout';
import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_URL;
export default function Home() {
  const [products, setproducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get(`/products`)
    console.log(baseURL);
    setproducts(res.data)
    console.log(res.data);
  }

  const deleteProduct = async(id) => {
    const res = await axios.delete(`/products/${id}`)
    console.log(res.data);
    setproducts(products.filter(p=>p._id !== id))
  }
  useEffect(() => {
    getProducts()
  }, []);


  return (

    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            products.map((product) => (
              <PostLayout {...product} deleteProduct={deleteProduct} key={product._id} />
            ))
          }
        </div>
      </div>
    </section>
  )
}
