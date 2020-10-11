import React, { useState, useEffect } from 'react'

import './App.css'
import Tab from './Tab'
import { products, Product } from './data'

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
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>()

  const onSelectTab = (tab: TabName) => setActiveTab(tab)

  useEffect(() => {
    setDisplayedProducts(products)
  }, [])

  useEffect(() => {
    if (activeTab === 'All') {
      setDisplayedProducts(products)
    } else {
      const filteredProducts = products.filter(
        (prod) => prod.category === activeTab
      )

      setDisplayedProducts(filteredProducts)
    }
  }, [activeTab])

  return (
    <div className='App'>
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
          <div className='content'>
            <img key={prod.id} src={prod.image} alt={prod.id} width={200} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
