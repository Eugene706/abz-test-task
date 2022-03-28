export interface IForm {
  name: string;
  email: string;
  phone: string;
  position_id: string;
  photo: Blob | undefined;
}

export interface IPositions {
  id: number;
  name: string;
}

export interface IUserObj {
  page: number;
  total_pages: number;
  users: IUser[];
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  phone: string;
  photo: string;
  position: string;
}

export interface IMediaMapImgs {
  [key: string]: string;
}

export interface IHeaderNavigation {
  name: string;
  link: string;
}

export interface IRegistrationResponse {
  message: string;
  success: boolean;
}
