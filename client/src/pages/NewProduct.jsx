import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsCloudUpload } from "react-icons/bs";
import { ImagetoBase64 } from '../utility/ImagetoBase64';

function NewProduct() {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })

  }

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0])
    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)

    const { name, image, category, price } = data

    if (name && image && category && price) {
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })

      const fetchRes = await fetchData.json()

      console.log(fetchRes)
      toast(fetchRes.message)

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: ""
        }
      })
    }
    else {
      toast("Enter required Fields")
    }


  }
  return (
    <div className="p-4">
      <form className='m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name="name" className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name} />

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>select category</option>
          <option value={"Tents"}>Tents</option>
          <option value={"Sleeping Gear"}>Sleeping Gear</option>
          <option value={"Cooking Equipment"}>Cooking Equipment</option>
          <option value={"Backpacks"}>Backpacks</option>
          <option value={"Lighting"}>Lighting</option>
          <option value={"Clothing"}>Clothing</option>
          <option value={"FirstAid And Safety"}>First Aid and Safety</option>
          <option value={"Hydration"}>Hydration</option>
          <option value={"Navigation"}>Navigation</option>
          <option value={"Furniture And Comfort"}>Furniture and Comfort</option>
        </select>

        <label htmlFor='image'>Image
          <div className='h-40 w-full bg-slate-200  rounded flex items-center justify-center cursor-pointer'>
            {
              data.image ? <img src={data.image} className="h-full" /> : <span className='text-5xl'><BsCloudUpload /></span>
            }


            <input type={"file"} accept="image/*" id="image" onChange={uploadImage} className="hidden" />
          </div>
        </label>


        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} value={data.price} />

        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange}></textarea>

        <button className='bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  );
}

export default NewProduct;