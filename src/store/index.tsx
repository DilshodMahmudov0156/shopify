import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProductsArr {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number

};

interface MyProducts {
    products: ProductsArr[],

};

export const useStore = create(
    persist(
        (set, get) => ({
            products: [],
            getProducts: (data: ProductsArr[]): void => set((state) => ({
                products: data
            }))
        }),
        {
            name: "products-storage",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
);