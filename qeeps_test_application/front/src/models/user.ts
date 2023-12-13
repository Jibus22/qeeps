interface IUser {
  type: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
  address: string;
  income: number;
  job?: string;
  situation: string;
  guarantor?: IUser[];
  phone: string;
  agency: string;
  jobname: string;
}
