import {Link, Links} from "react-router-dom"
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import avatarImg from '../assets/avatar.png'
import { useState } from "react";


const currentUser = true  ;
const Navbar = () => {
  const [isDropDownOpen,setisDropDownOpen] = useState(false)
  const navigation = [
    {name:'Dashboard', href:'/Dashboard'},
    {name:'Orders', href:'/orders'},
    {name:'Cart page', href:'/cart'},
    {name:'Check Out', href:'/checkout'},
  ] 
  return (
    <header className="max-w-screen-2xl mx-auto px-8 py-6">
        <nav className="flex justify-between items-center">
            <div>
              <Link to="/">
              <HiOutlineBars3CenterLeft className=" size-7"/> 
              </Link>
            </div>  
            <div className=" relative sm:w-72 space-x-2 right-[450px]">
            <IoMdSearch className="absolute left-3 inset-y-2 sm:*:first-letter:first-line:" />
            <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8  rounded-md "></input>
            </div>
            <div className=" relative flex space-x-4 items-center ">
            <div >
              {
                currentUser ? <>
                  <button onClick={()=>setisDropDownOpen(!isDropDownOpen)}>
                    <img src={avatarImg} alt="" className={`size-7 rounded-full ${currentUser ? 'ring-2 ring-blue-300' : ''}`}
                    />
                  </button>
                  {/* show dropDowns*/ }
                  {
                    isDropDownOpen && (
                      <div className=" absolute bg-white  shadow-lg  right-[90px]">
                        <ul className=" py-2 ">
                          {
                            navigation.map((item)=>(
                              <li key={item.name} onClick={()=> setisDropDownOpen(false)}>
                                <Link to={item.href} className=" block px-4 py-2 text-sm hover:bg-gray-200">
                                {item.name}

                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }
                </> : <Links to="/login"><FaUser className=" size-5" /></Links>
              }
            </div>
            
            <button>
            <MdFavoriteBorder className=" size-7" />
            </button>
            <Link to="/" className=" bg-primary p-1 sm:px-5 px-2 flex items-center rounded-sm">
            <HiShoppingCart className=" size-5" />
            <span>0</span>
            </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar