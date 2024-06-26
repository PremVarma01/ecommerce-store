export interface Billboard {
    id: string;
    label: string;
    imageUrl: string
}

export interface Category {
    id: string;
    name: string;
    billboard: Billboard
}

export interface Product {
    id: string;
    qty?: number;
    category: Category
    name: string
    price: string
    isFeatured: boolean;
    sizes: Size[];
    colors: Color[];
    images: Image[]
    productType: "OUT_OF_STOCK" | "REGULAR" | "NEW"
}

export interface Image {
    id: string;
    url: string
}

export interface Size {
    id: string;
    name: string
    value: string
}

export interface Color {
    id: string;
    name: string
    value: string
}