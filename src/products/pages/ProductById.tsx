import { useParams } from "react-router-dom";
import { ProductCard, useProduct } from "..";
import { useEffect } from "react";

export const ProductById = () => {
  const { id } = useParams();
  const { product, isLoading } = useProduct({ id: +id! });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-col">
      <h1 className="text-2xl font-bold">Producto</h1>

      <div className="flex justify-center items-center">
        {isLoading && <p>Cargando...</p>}
      </div>

      {product && <ProductCard product={product} fullDescription />}
    </div>
  );
};
