import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useAppContext} from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {
    const {products, searchQuery} = useAppContext()
    const [filteredProducts, setFilteredProducts] = React.useState([]) 
    const { category } = useParams()

    useEffect(()=> {
        let list = products;
        if (category) {
            list = list.filter(
                product => product.category.toLowerCase() === category.toLowerCase()
            );
        }
        if (searchQuery.length > 0) {
            list = list.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }
        setFilteredProducts(list);
    }, [products, searchQuery, category])

  return (
    <div className='mt-16 flex flex-col m-16'>
      <div className='flex flex-col items-end w-max'>
        <p className='text-2xl font-medium uppercase'>
            {category ? `${category}` : 'All Products'}
        </p>
        <div className='w-35 h-1 bg-primary rounded-full'></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 lg:grid-cols-5 mt-6'>
          {
             filteredProducts.filter((product) => product.inStock).length > 0 ? (
                 filteredProducts.filter((product) => product.inStock).map((product, index) => (
                    <ProductCard key={index} product={product} />
                 ))
             ) : (
                 <div className='col-span-full text-center py-12'>
                     <p className='text-gray-500 text-lg font-medium'>No products found matching your selection.</p>
                 </div>
             )
          }
      </div>
    </div>
  )
}

export default AllProducts
