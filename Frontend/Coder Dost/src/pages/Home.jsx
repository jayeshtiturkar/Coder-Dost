import React, { useEffect, useState } from 'react'
import PostLayout from './PostLayout';
import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_URL;
export default function Home() {
  const [products, setproducts] = useState([]);
  const [pages, setPages] = useState()
  const [result,setResult] = useState()

  const getProducts = async () => {
    const res = await axios.get(`${baseURL}/products`)
    setproducts(res.data)
    setPages(res.data.length)
  }

  const deleteProduct = async (id) => {
    const res = await axios.delete(`${baseURL}/products/${id}`)
    console.log(res.data);
    setproducts(products.filter(p => p._id !== id))
  }
  useEffect(() => {
    getProducts()
  }, []);

  const handlevent = async (e) => {
    const val = e.target.value.split(" and ")
    const res = await axios.get(`${baseURL}/products?sort=${val[1]}&value=${val[0]}`)
    console.log(res.data);
    setproducts(res.data)
    console.log(pages)
    setResult(res.data)

  }

  const handlpage = (num) => {
    // const res = await axios.get(`${baseURL}/products?page=${num}`)
    // console.log(res.data);
    // setproducts(res.data)
    const firstFour = result.slice(((num-1)*4), ((4*num)));
    setproducts(firstFour)

  }

  return (

    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-15 mx-auto">
        <div className='bg-black-500 mb-10 font-white'>
          <label htmlFor="standard-select">Standard Select</label>
          <div className="select" >
            <select id="standard-select" onChange={handlevent} className='rounded m-2 py-2 px-5 bg-gray-200 text-black'>
              <option value="price and asc">Price Low To High</option>
              <option value="price and desc">Price High To Low</option>
              <option value="quantity and asc">Quntity Low To High</option>
              <option value="quantity and desc">Quntity High To Low</option>
            </select>
            <span className="focus"></span>
          </div>
        </div>
        <div>
          {
            Number.isFinite(pages) && pages > 0 &&
            Array(Math.ceil(pages / 4)).fill(0).map((e, i) => (
              <button key = {i} onClick={() => handlpage(i + 1)} className='bg-pink-300 m-2 px-2 font-bold text-black'> {i + 1} </button>

            ))
          }
        </div>
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
