import { useState } from "react";
import axios from 'axios'
const baseURL = import.meta.env.VITE_BASE_URL;

export default function PostForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`/products`,formData)
    console.log(res.data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-xl space-y-4"
    >
      <h2 className="text-xl font-semibold text-center">Add New Product</h2>

      <input
        type="text"
        name="title"
        placeholder="Product Title"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="price"
        placeholder="Price"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="text"
        name="total"
        placeholder="Total"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="text"
        name="discountPercentage"
        placeholder="DiscountPercentage"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />
      <input
        type="text"
        name="thumbnail"
        placeholder="Thumbnail"
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-md"
        required
      />

      <button
        type="submit"
        className="w-full bg-green-400 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
}
