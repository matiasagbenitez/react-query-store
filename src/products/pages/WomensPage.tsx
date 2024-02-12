import { ProductList } from "..";
import { useProducts } from "..";

export const WomensPage = () => {

  const { isLoading, products } = useProducts({ filterKey: "women's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para mujeres</h1>

      <div className="flex justify-center items-center">
        {isLoading && <p>Cargando...</p>}
      </div>

      <ProductList products={products} />

    </div>
  )
}