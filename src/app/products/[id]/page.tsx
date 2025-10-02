import ProductDetail from '@/app/components/ProductDetail'
import React from 'react'

export async function generateMetadata({ params }: { params: { id: number } }) {
  const { id } = params;

  const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).catch(() => null);

  return {
    title: product ? product.title : 'Producto no encontrado',
    description: product ? product.description : 'No se pudo obtener la descripción del producto.',
  };
}

const ProductPage = ({ params }: { params: {id: number } }) => {
  const { id } = params 

  return (
    <div className="mx-auto p-4">
      <ProductDetail id={id} />
    </div>
  )
}

export default ProductPage