"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEvent, MouseEventHandler, useEffect, useState } from "react";
import { cn } from "@/libs/utils";
import toast from "react-hot-toast";

interface InfoProps {
  data: Product;
}
const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [qty, setQty] = useState<number>(
    cart.items.find(
      (item) =>
        item.id == data.id && item.colors?.[0].id === data.colors?.[0].id
    )?.qty || 1
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    data.colors?.[0].id
  );
  const [selectedSize, setSelectedSize] = useState<string>(data?.sizes?.[0].id);

  const order = ["XS", "S", "M", "L", "XL", "XXL"];

  // Sort the data based on the order
  const sortedData = data?.sizes.sort(
    (a, b) => order.indexOf(a.value) - order.indexOf(b.value)
  );

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.updateItem(
      {
        ...data,
        colors: data.colors.filter((item) => item.id === selectedColor),
        sizes: data.sizes.filter((item) => item.id === selectedSize),
      },
      qty
    );
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const sizeElement = event.target as HTMLDivElement;
    const sizeId = sizeElement.getAttribute("data-size-id"); // Get the id from the data attribute
    const colorId = sizeElement.getAttribute("data-color-id"); // Get the id from the data attribute
    if (sizeId) {
      setSelectedSize(sizeId);
    }
    if (colorId) {
      setSelectedColor(colorId);
    }
  };

  const increaseQty = () => {
    if (qty <= 1) {
      setQty((prev) => prev + 1);
      return;
    }
    toast("Maximum limit exceeds");
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty((prev) => prev - 1);
      return;
    }
    toast("Minimum limit exceeds");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex justify-between items-end">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </p>
      </div>
      {/* <hr className="my-4" /> */}
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4 mt-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div className="flex items-center gap-x-4" onClick={handleClick}>
            {sortedData.map((size, index) => (
              <div
                key={index}
                className={cn(
                  "size-item text-gray-500 border-gray-200 text-sm border py-1 px-2 text-center cursor-pointer",
                  selectedSize === size?.id &&
                    "border-neutral-900 text-neutral-600"
                )}
                data-size-id={size.id} // Add a data attribute for the size id
              >
                {size.value}
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="flex items-center justify-start gap-2"
            onClick={handleClick}
          >
            {data.colors.map((color) => (
              <div
                key={color.id}
                data-color-id={color.id}
                className={cn(
                  "w-6 h-6 rounded-full border-gray-200 border",
                  selectedColor === color?.id && "border-neutral-600 border-2"
                )}
                style={{ backgroundColor: color.value }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <div className="hidden sm:block text-center relative bg-gray-50 p-2">
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
                {qty}
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
        <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
