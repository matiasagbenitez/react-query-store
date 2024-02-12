import { useQuery } from "@tanstack/react-query";
import { productActions } from "..";

interface Options {
    filterKey?: string;
}

export const useProducts = ({ filterKey }: Options) => {

    const { isLoading, isError, error, data: products = [], isFetching } = useQuery({
        queryKey: ['products', { filterKey }],
        queryFn: () => productActions.getProducts({ filterKey }),
        staleTime: 1000 * 60 * 60, // 1 hour
    });

    return {
        isLoading,
        isError,
        error,
        products,
        isFetching
    };
}
