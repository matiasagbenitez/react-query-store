import { ProductList } from "..";
import { useProducts } from "..";

export const MensPage = () => {
  const { isLoading, products } = useProducts({ filterKey: "men's clothing" });

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Productos para hombres</h1>

      <div className="flex justify-center items-center">
        {isLoading && <p>Cargando...</p>}
      </div>

      <ProductList products={products} />
    </div>
  );
};
