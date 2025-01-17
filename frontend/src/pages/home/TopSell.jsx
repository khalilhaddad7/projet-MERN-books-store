import React, { useEffect, useState } from 'react'




const categories = ["Choose a genre","Business","Fiction","Horror","Adventure"]
const TopSell = () => {
    const [books,setbooks]=useState([])
    const [selectedCategory,setselectedCategory]=useState("choose a genre")



    useEffect(()=>{
        fetch("books.json")
        .then(res=>res.json())
        .then((data)=>setbooks(data))
    },[])
    const filterbooks = selectedCategory === "choose a genre" ? books: books.filter(book=>
        book.category === selectedCategory.toLowerCase())
        
  return (
    <div className='py-10'>
        <h2 className=' text-3xl font-semibold mb-6'>Top Sellers</h2>
        {/* category filtering */}
        <div className=' mb-20 flex items-center'>
            <select onChange={(e)=> setselectedCategory(e.target.value)}
             name="category" id="category" className=' border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none cursor-pointer'>
                {
                    categories.map((category,index)=>(
                        <option key={index} value={category}>{category}</option>
                    ))
                }
            </select>
        </div>
        {
            filterbooks.map((book,index) => (
                <div>{book.title}</div>
            ))
        }
    </div>
  )
}

export default TopSell