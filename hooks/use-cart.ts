import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from '@/types';

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    updateItem: (data: Product, qty: number) => void
    removeItem: (id: string) => void;
    deleteItem: (id: string, colorId: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product) => {
            const currentItems = get().items;
            const existingItemIndex = currentItems.findIndex((item) => item.id === data.id && item.colors[0]?.id === data.colors[0]?.id);

            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, update its quantity
                const updatedItems = [...currentItems];
                if (updatedItems[existingItemIndex].qty! <= 1) {
                    updatedItems[existingItemIndex].qty! += 1;
                    set({ items: updatedItems });
                    toast.success('Item quantity updated.');
                } else {
                    toast("You reached to maximum allowed quantity")
                }

            } else {
                // If the item is not in the cart, add it with a quantity of 1
                set({ items: [...currentItems, { ...data, qty: 1 }] });
                toast.success('Item added to cart.');
            }
        },
        updateItem: (data: Product, qty: number) => {
            const currentItems = get().items;
            const existingItemIndex = currentItems.findIndex((item) => item.id === data.id && item.colors?.[0]?.id === data.colors?.[0]?.id);

            if (existingItemIndex !== -1) {
                // If the item already exists in the cart, update its quantity
                const updatedItems = [...currentItems];
                if (qty <= 2) {
                    updatedItems[existingItemIndex].qty! = qty;
                    set({ items: updatedItems });
                    toast.success('Item quantity updated.');
                } else {
                    toast("You reached to maximum allowed quantity")
                }
            } else {
                // If the item is not in the cart, add it with a quantity of 1
                set({ items: [...currentItems, { ...data, qty: 1 }] });
                toast.success('Item added to cart.');
            }
        },
        deleteItem: (id: string, colorId: string) => {
            const currentItems = get().items;
            const updatedItems = currentItems.filter((item) => (item.id !== id || (item.id === id && item.colors?.[0].id !== colorId)));
            console.log(updatedItems, 'update')
            set({ items: updatedItems });
        },
        removeItem: (id: string) => {
            const currentItems = get().items;
            const existingItemIndex = currentItems.findIndex((item) => item.id === id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...currentItems];
                const currentItem = updatedItems[existingItemIndex];

                if (!currentItem.qty || currentItem.qty <= 1) {
                    // If the quantity is 1, remove the item from the cart
                    updatedItems.splice(existingItemIndex, 1);
                    toast.success('Item removed from cart.');
                } else {
                    // If the quantity is greater than 1, decrement the quantity
                    currentItem.qty! -= 1;
                    toast.success('Item quantity updated.');
                }

                set({ items: updatedItems });
            }
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: 'cart-storage',
        storage: createJSONStorage(() => localStorage)
    }));

export default useCart;