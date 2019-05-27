import { ProductItem } from "../fetchProductList/interfaces-types";

export interface ProductItemState {
    isLoadingItem: boolean;
    addProduct: object;
    productItem: ProductItem | {};
    error: any;
}