export interface Owner {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar?: string;
    locaton?: string;
    color_scheme?: string;
    language?: string;
}

export interface ProductItem {
    pk: number;
    owner: Owner;
    theme: string;
    text?: string;
    price?: number;
    currency?: number;
    images?: string[];
    contract_price?: boolean;
    location?: string;
    category?: string;
    activated_at?: string;
    is_Active?: boolean;
}

export interface ProductListState {
    isLoadingList: boolean;
    productList: ProductItem[];
    error: any;
    meta: object
}