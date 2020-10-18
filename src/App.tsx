import React, { useState, useEffect } from 'react'

import './App.css'
import Tab from './Tab'
import { Product, products } from './data'

export type TabName = 'Clothing' | 'Shoes' | 'Watches' | 'Accessories' | 'All'
const tabNames: TabName[] = [
  'Clothing',
  'Shoes',
  'Watches',
  'Accessories',
  'All',
]

function App() {
  const [activeTab, setActiveTab] = useState<TabName>('All')
  const [displayedProducts, setDisplayedProducts] = useState<Product[] | null>()

  const onSelectTab = (tab: TabName) => setActiveTab(tab)

  useEffect(() => {
    if (activeTab === 'All') {
      setDisplayedProducts(products)
    } else {
      if (!products) return

      const filteredProducts = products.filter(
        (prod) => prod.category === activeTab
      )

      setDisplayedProducts(filteredProducts)
    }
  }, [activeTab])

  return (
    <div className='App'>
      <div>
        <form className='add-product'>
          <label htmlFor='Title'>
            Title
            <input type='text' name='title' />
          </label>
          <label htmlFor='Description'>
            Description
            <input type='text' name='description' />
          </label>
          <label htmlFor='Image'>
            Image
            <input type='text' name='image' />
          </label>
          <label htmlFor='Category'>
            Category
            <input type='text' name='category' />
          </label>
          <button type='submit'>Add</button>
        </form>
      </div>

      <div className='tab-lists'>
        {tabNames.map((name) => (
          <Tab
            key={name}
            activeTab={activeTab}
            name={name}
            onSelectTab={onSelectTab}
          />
        ))}
      </div>

      <div className='tab-content'>
        {displayedProducts?.map((prod) => (
          <div className='content' key={prod.id}>
            <img key={prod.id} src={prod.image} alt={prod.id} width={200} />
            <h3>{prod.title}</h3>
            <p>{prod.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
