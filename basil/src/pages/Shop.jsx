import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { Navbar, Footer } from '../components'
import trees from '../assets/trees.png'
import item1 from '../assets/item1.png'
import item2 from '../assets/item2.png'
import item3 from '../assets/item3.png'

const Shop = () => {

  const products = [
    {
      name: 'Item 1',
      price: 6.66,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: item1
    },
    {
      name: 'Item 2',
      price: 6.66,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: item2
    },
    {
      name: 'Item 3',
      price: 6.66,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: item3
    },
  ]

  const [hover, setHover] = useState(0)

  return (
    <motion.div animate={{ opacity: [0, 1] }} transition={{ duration: 1.6 }}>
      <Navbar />
      <div className="section text-center">
        <h1 className="text-[3.125rem]">The Shop</h1>
        <p className="text-[1.125rem]">Prints</p>
        <img src={trees} alt="trees" />
        <div className="grid grid-flow-row text-left gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8">
          {products.map((product, index) => (
            <div onMouseEnter={() => setHover(index+1)} onMouseLeave={() => setHover(0)}>
              <div className="relative mb-4 w-fit">
                <img src={product.image} alt={product.name} />
                {hover==index+1 && <button className="absolute top-[50%] left-[50%] bg-white border-2 border-black px-[15%] py-[5%] translate-x-[-50%] translate-y-[-50%]">BUY</button>}
              </div>
              <h3 className="text-[1.875rem]">{product.name}</h3>
              <p className="text-[1.125rem]">${product.price}</p>
              <p className="text-[0.938rem]">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  )
}

export default Shop