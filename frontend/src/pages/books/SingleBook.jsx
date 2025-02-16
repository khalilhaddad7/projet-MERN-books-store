import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchbookbyIdQuery } from '../../redux/features/cart/booksApi'
import { getImgUrl } from '../../utils/getImg'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { addtocart } from '../../redux/features/cart/CartSlice'

const SingleBook = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useFetchbookbyIdQuery(id);
  
  const book = data?.getAbook || {}; // ✅ Extraire uniquement l'objet livre
  
  console.log("Book ID:", id);
  console.log("Book Data:", book);
  console.log("Loading:", isLoading);
  console.log("Error:", isError, error);
  


  const dispatch =  useDispatch();

  const handleAddToCart = (product) => {
      dispatch(addtocart(product))
  }

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error happending to load book info</div>
return (
  <div className="max-w-lg shadow-md p-5">
          <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

          <div className=''>
              <div>
                  <img
                      src={`${getImgUrl(book.coverImage)}`}
                      alt={book.title}
                      className="mb-8"
                  />
              </div>

              <div className='mb-5'>
                  <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                  <p className="text-gray-700 mb-4">
                      <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mb-4 capitalize">
                      <strong>Category:</strong> {book?.category}
                  </p>
                  <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
              </div>

              <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 ">
                  <FiShoppingCart className="" />
                  <span>Add to Cart</span>

              </button>
          </div>
      </div>
)
}

export default SingleBook