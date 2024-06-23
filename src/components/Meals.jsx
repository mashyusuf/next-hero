'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState('a');
    const [meals, setMeals] = useState([]);

    const leadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
            const data = await res.json();
            setMeals(data.meals || []); // Ensure meals is always an array
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        leadData();
    }, [search]); // Fetch data every time search changes

    const handler = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className='p-12 bg-gray-100 min-h-screen flex flex-col items-center'>
            <div className='flex space-x-4 mb-8'>
                <input
                    onChange={handler}
                    type="search"
                    placeholder='Search meals...'
                    className='px-4 py-2 border-2 border-blue-400 rounded-lg focus:outline-none focus:border-blue-600'
                />
                <button onClick={leadData}
                    className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                >
                    Search
                </button>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9'>
                {
                    meals.length > 0 ? meals.map((meal) => (
                        <div key={meal.idMeal} className='border-2 p-4 rounded-lg bg-white shadow-md'>
                             <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={500}/>
                            <h1 className='text-lg font-semibold mb-2'>
                                {meal.strMeal}
                            </h1>
                            <p className='text-sm text-gray-700'>
                                {meal.strInstructions.substring(0, 100)}...
                            </p>
                        </div>
                    )) : (
                        <p className='text-lg text-gray-600'>
                            No meals found.
                        </p>
                    )
                }
            </div>
        </div>
    );
};

export default Meals;
