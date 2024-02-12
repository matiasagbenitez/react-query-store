import { useQuery } from "@tanstack/react-query";
import { productActions } from "..";

interface Options {
    id: number;
}

export const useProduct = ({ id }: Options) => {

    const { isLoading, isError, error, data: product, isFetching } = useQuery({
        queryKey: ['products', { id }],
        queryFn: () => productActions.getProductById(id),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    return {
        isLoading,
        isError,
        error,
        product,
        isFetching
    };
}
