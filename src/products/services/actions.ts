import { type Product, productsApi } from "..";

interface GetProductsOptions {
    filterKey?: string;
}

const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {
    await sleep(1);
    const filters = filterKey ? `category=${filterKey}` : '';
    const { data } = await productsApi.get<Product[]>(`/products?${filters}`);
    return data;
};

export const getProductById = async (id: number): Promise<Product> => {
    // await sleep(1); '';
    const { data } = await productsApi.get<Product>(`/products/${id}`);
    return data;
};