"use client";

import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { cn } from "@/libs/utils";
import { Product } from "@/types";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.deleteItem(data.id, data?.colors?.[0].id);
  };

  const increaseQty = () => {
    cart.addItem(data);
  };

  const decreaseQty = () => {
    cart.removeItem(data?.id);
  };

  return (
    <div className="">
      <li className="flex py-6 border-b">
        <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
          <Image
            fill
            src={data.images?.[0].url}
            alt=""
            className="object-cover object-center"
          />
        </div>
        <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
          <div className="absolute z-10 right-0 top-0">
            <IconButton onClick={onRemove} icon={<X size={15} />} />
          </div>
          <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
            <div className="">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-black">{data.name}</p>
              </div>

              <div className="flex items-center justify-start gap-x-4 mt-2">
                <div className="flex items-center">
                  {data.colors.map((color, index) => (
                    <div
                      key={index}
                      className={cn(
                        "border-gray-400 w-4 h-4 cursor-pointer border rounded-full"
                      )}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-x-4">
                  <div
                    className={cn(
                      "border-gray-400  text-sm border-l px-4 cursor-pointer"
                    )}
                    // Add a data attribute for the size id
                  >
                    {data.sizes.map((size, index) => size.value.toString())}
                  </div>
                </div>
              </div>
              <div className="hidden sm:block text-center relative mt-6">
                <div className="nc-NcInputNumber flex items-center justify-between space-x-5 relative z-10">
                  <div className="nc-NcInputNumber__content flex items-center justify-between w-[104px] sm:w-28">
                    <button
                      onClick={() => decreaseQty()}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                      type="button"
                    >
                      <Minus size={15} />
                    </button>
                    <span className="select-none block flex-1 text-center leading-none">
                      {data.qty}
                    </span>
                    <button
                      onClick={() => increaseQty()}
                      className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 focus:outline-none hover:border-neutral-700 dark:hover:border-neutral-400 disabled:hover:border-neutral-400 dark:disabled:hover:border-neutral-500 disabled:opacity-50 disabled:cursor-default"
                      type="button"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between py-[2px] mt-6">
                {/* Select Qty */}
                <div className="sm:hidden">T</div>
                <div className="flex items-center justify-between border-2 max-w-min px-2 rounded-lg border-green-500">
                  <Currency
                    className="text-green-500 text-sm"
                    value={data?.price}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
