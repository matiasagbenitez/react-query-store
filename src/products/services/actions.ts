import { type Product, productsApi } from "..";

interface GetProductsOptions {
    filterKey?: string;
}

export const sleep = (seconds: number) => new Promise((resolve) => setTimeout(resolve, seconds * 1000));

export const getProducts = async ({ filterKey }: GetProductsOptions): Promise<Product[]> => {
    // await sleep(2);
    const filters = filterKey ? `category=${filterKey}` : '';
    const { data } = await productsApi.get<Product[]>(`/products?${filters}`);
    return data;
};

export const getProductById = async (id: number): Promise<Product> => {
    // await sleep(2);
    const { data } = await productsApi.get<Product>(`/products/${id}`);
    return data;
};

interface ProductLike {
    id?: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export const createProduct = async (product: ProductLike): Promise<Product> => {
    await sleep(5);
    throw new Error('Error al crear el producto');
    const { data } = await productsApi.post<Product>('/products', product);
    return data;
}