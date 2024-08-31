export interface IFakeUserResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IFakeUser[];
  support: {
    url: string;
    text: string;
  };
}

export interface IFakeUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
