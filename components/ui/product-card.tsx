"use client";

import { Product } from "@/types";
import Image from "next/image";
import { MouseEventHandler } from "react";
import {
  BadgePercent,
  Clock4,
  Expand,
  Info,
  RefreshCcw,
  ShoppingBag,
} from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import Button from "./button";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { StarIcon } from "../star-icon";

interface ProductCardProps {
  data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem({
      ...data,
      colors: [data.colors[0]],
      sizes: [data.sizes[0]],
    });
  };

  const loadProductMetadata = {
    OFFER: (
      <>
        <div className="absolute  left-2 top-2 gap-1 flex items-center">
          <div className="flex items-center px-2 py-1 rounded-xl bg-white gap-1">
            <BadgePercent size={14} />
            <span className="text-xs">New</span>
          </div>
        </div>
      </>
    ),
    LIMITED_EDITION: (
      <>
        <div className="absolute  left-2 top-2 gap-1 flex items-center">
          <div className="flex items-center px-2 py-1 rounded-xl bg-white gap-1">
            <Clock4 size={14} />
            <span className="text-xs">limited edition</span>
          </div>
        </div>
      </>
    ),
    NEW: (
      <>
        <div className="absolute  left-2 top-2 gap-1 flex items-center">
          <div className="flex items-center px-2 py-1 rounded-xl bg-white gap-1">
            <RefreshCcw size={14} />
            <span className="text-xs">New</span>
          </div>
        </div>
      </>
    ),
    OUT_OF_STOCK: (
      <>
        <div className="absolute  left-2 top-2 gap-1 flex items-center">
          <div className="flex items-center px-2 py-1 rounded-xl bg-gray-400 gap-1">
            <Info size={14} />
            <span className="text-xs">Sold Out</span>
          </div>
        </div>
      </>
    ),
    REGULAR: <></>,
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      <div className=" aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="image"
          src={data?.images?.[0]?.url}
          fill
          className="aspect-sqaure object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-4 bottom-5">
          <div className="flex  justify-center">
            <div className="mt-10 flex items-center">
              <Button
                className="flex items-center py-2 px-4 text-xs mr-2"
                onClick={onAddToCart}
              >
                <ShoppingBag className="pr-1" size={16} />
                Add to bag
              </Button>
            </div>
            <div className="mt-10 flex items-center">
              <Button
                className="flex items-center  bg-white text-black py-2 px-4 text-xs"
                onClick={onPreview}
              >
                <Expand className="pr-1" size={16} />
                Quick view
              </Button>
            </div>
          </div>
        </div>
        {loadProductMetadata[data?.productType]}
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data?.category?.name}</p>
      </div>
      {/* Price */}
      <div className="flex justify-between items-center">
        <div className="flex gap-x-2 items-center">
          <div className="flex items-center justify-between border-2 max-w-min px-2 py-[2px] rounded-lg border-green-500">
            <Currency className="text-green-500 text-sm" value={data?.price} />
          </div>
          <div className="">
            <Currency
              className="text-gray-400 text-sm line-through"
              value={Number(data?.price) + 100}
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon className="text-yellow-400 w-4 h-4" />
          <p className="text-sm text-gray-600">4.5</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
