export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  comfirmPassword: string;
  showPassword: boolean;
  showConfirmPassword: boolean;
}

export interface ILoginFormData {
  email: string;
  password: string;
  showPassword: boolean;
}

export type LoggedInUser = {
  _id: string,
  username: string,
  email: string,
  createdAt: string,
  updatedAt: string,
  token?: string,
}

export interface IState {
  user: LoggedInUser | null;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export interface IRegisterUser {
  username: string;
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export type ErrorType = {
  response: {
    data: { 
      message: string;
    }
  }
}
export interface IRootState {
  auth: IState;
}

export interface IDeliveryFormData {
  customerName: string;
  warehouseAddress: string;
  deliveryDate: string;
  deliveryAddress: string;
}

export type Delivery = {
  customerName: string;
  warehouseLat: string;
  warehouseLng: string;
  deliveryDate: string;
  deliveryAddressLat: string;
  deliveryAddressLng: string;
}

export interface IDelivery {
  deliveries: Delivery[],
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type State = {
  auth: {
    user: {
      token: string;
    }
  }
}