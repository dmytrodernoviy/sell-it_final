import { Owner } from "../fetchProductList/interfaces-types";

export interface AuthorizedState {
    isLogin: boolean;
    loading: boolean,
    loadingApp: boolean,
    errorLogin: any;
    errorRegister: any;
    userData: Owner | {};
}