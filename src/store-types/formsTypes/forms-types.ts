export interface FormAddProduct {
    theme: string;
    text?: string;
    price?: number;
    currency?: boolean;
    contract_price?: number;
    location?: string;
    is_Active?: boolean;
}

export interface SignUpForm {
    email: string;
    password: string;
}

export interface SignInForm {
    username?: string;
    email: string;
    password1: string;
    password2: string;
}