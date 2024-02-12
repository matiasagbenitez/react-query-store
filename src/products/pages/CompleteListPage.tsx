import { ProductList, useProducts } from ".."

export const CompleteListPage = () => {

  const { isLoading, products } = useProducts({});

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Todos los productos</h1>

      <div className="flex justify-center items-center">
        {isLoading && <p>Cargando...</p>}
      </div>

      <ProductList products={products} />

    </div>
  )
}