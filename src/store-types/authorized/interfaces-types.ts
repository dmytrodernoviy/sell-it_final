import { Owner } from "../fetchProductList/interfaces-types";

export interface AuthorizedState {
    isLogin: boolean;
    errorLogin: any;
    errorRegister: any;
    userData: Owner | {};
}