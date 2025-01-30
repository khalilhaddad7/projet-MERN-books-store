import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);
    const currentUser = { email: "user@example.com" }; // Remplace par les données réelles de l'utilisateur

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onTouched' });
    
    const[isChecked,setIsChecked] = useState(false);
    const onSubmit = (data) => {
        const newOrder = {
            name: data.name,
            email: currentUser?.email,
            adresse: {
                city: data.city,
                country: data.country,
                state: data.state,
                zipcode: data.zipcode,
            },
            phone: data.phone,
            productIds: cartItems.map(item=> item?._id),
            totalPrice: totalPrice,

        }
        console.log(newOrder)
    }

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="font-semibold text-xl text-gray-600 mb-2">Cash On Delivery</h2>
                    <p className="text-gray-500 mb-2">Total Price: $ {totalPrice}</p>
                    <p className="text-gray-500 mb-6">Items: {cartItems.length}</p>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 text-sm grid-cols-1 lg:grid-cols-3 my-8">
                            <div className="text-gray-600">
                                <p className="font-medium text-lg">Personal Details</p>
                                <p>Please fill out all the fields.</p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="grid gap-4 text-sm grid-cols-1 md:grid-cols-5">
                                    {/* Full Name */}
                                    <div className="md:col-span-5">
                                        <label htmlFor="full_name">Full Name</label>
                                        <input 
                                            {...register("name", { required: "Full Name is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                                    </div>

                                    {/* Email Address */}
                                    <div className="md:col-span-5">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            defaultValue={currentUser.email}
                                            disabled
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                    </div>

                                    {/* Phone Number */}
                                    <div className="md:col-span-5">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input 
                                            {...register("phone", { required: "Phone number is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                                    </div>

                                    {/* Address */}
                                    <div className="md:col-span-3">
                                        <label htmlFor="address">Address / Street</label>
                                        <input 
                                            {...register("address", { required: "Address is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
                                    </div>

                                    {/* City */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="city">City</label>
                                        <input 
                                            {...register("city", { required: "City is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.city && <p className="text-red-500">{errors.city.message}</p>}
                                    </div>

                                    {/* Country */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="country">Country / Region</label>
                                        <input 
                                            {...register("country", { required: "Country is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.country && <p className="text-red-500">{errors.country.message}</p>}
                                    </div>

                                    {/* State */}
                                    <div className="md:col-span-2">
                                        <label htmlFor="state">State / Province</label>
                                        <input 
                                            {...register("state", { required: "State is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.state && <p className="text-red-500">{errors.state.message}</p>}
                                    </div>

                                    {/* Zipcode */}
                                    <div className="md:col-span-1">
                                        <label htmlFor="zipcode">Zipcode</label>
                                        <input 
                                            {...register("zipcode", { required: "Zipcode is required" })}
                                            type="text"
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                        {errors.zipcode && <p className="text-red-500">{errors.zipcode.message}</p>}
                                    </div>

                                    {/* Terms & Conditions */}
                                    <div className="md:col-span-5 mt-3">
                                        <div className="inline-flex items-center">
                                        <input 
                                           {...register("terms", { required: "You must agree to the terms" })}
                                             type="checkbox"
                                             className="form-checkbox"
                                             onChange={(e) => setIsChecked(e.target.checked)}/>
                                            <label className="ml-2">
                                                I agree to the <Link className='underline text-blue-600'>Terms & Conditions</Link> and <Link className='underline text-blue-600'>Shopping Policy.</Link>
                                            </label>
                                        </div>
                                        {errors.terms && <p className="text-red-500">{errors.terms.message}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <div className="md:col-span-5 text-right">
                                        <button 
                                            type="submit"
                                            disabled={!isChecked}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Place an Order
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
