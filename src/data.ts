import { TabName } from './App'

export type Product = {
  id: string
  title: string
  description: string
  image: string
  category: TabName
}

export const products: Product[] = [
  {
    id: '1',
    title: 'Men Shirt',
    description: 'Male long sleeve shirt.',
    image:
      'https://previews.123rf.com/images/nikiteev/nikiteev1811/nikiteev181100117/112047271-vector-cartoon-long-sleeve-black-and-white-checkered-men-shirt.jpg',
    category: 'Clothing',
  },
  {
    id: '2',
    title: 'Men Shoes',
    description: 'Male nice shoes',
    image: 'https://fh.lnwfile.com/_/fh/_raw/hw/di/rw.jpg',
    category: 'Shoes',
  },
  {
    id: '3',
    title: 'Men Watch',
    description: 'Male luxury watch',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAPfEgEP7Er4TpgKYuUe_zEKP6Bqu79CGP7Pd-IphfR1JURGRK0OBvkBS8ozDTHZSqD6Y729no&usqp=CAc',
    category: 'Watches',
  },
  {
    id: '4',
    title: 'Men Wellet',
    description: 'Male beautifule wallet.',
    image:
      'https://c1.neweggimages.com/ProductImageCompressAll1280/AFZ4_1_201907271942756525.jpg',
    category: 'Accessories',
  },
]
