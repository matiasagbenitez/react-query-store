import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Product, productActions } from "..";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: productActions.createProduct,

    onMutate: async (product) => {
      console.log("Mutando - Optimistic update");

      // Optimistic product
      const optimisticProduct = { id: Math.random(), ...product };
      console.log("Optimistic product", optimisticProduct);

      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (oldProducts) => {
          if (!oldProducts) return [optimisticProduct];
          return [...oldProducts, optimisticProduct];
        }
      );

      return { optimisticProduct };
    },
    onSuccess: (product, _variables, context) => {

      queryClient.removeQueries({
        queryKey: ["product", { id: context?.optimisticProduct?.id }],
      });

      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: product.category }],
        (oldProducts) => {
          if (!oldProducts) return [product];
          return oldProducts.map( cacheProduct => {
            return cacheProduct.id === context?.optimisticProduct.id ? product : cacheProduct;
          })
        }
      );
    },

    onError: (_product, variables, context) => {
      queryClient.removeQueries({
        queryKey: ["product", { id: context?.optimisticProduct?.id }],
      });

      queryClient.setQueryData<Product[]>(
        ["products", { filterKey: variables.category }],
        (oldProducts) => {
          if (!oldProducts) return [];
          return oldProducts.filter(
            (cacheProduct) => cacheProduct.id !== context?.optimisticProduct.id
          );
        }
      );
    },
  });

  return mutation;
};
