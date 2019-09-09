import { User } from './user';

export class Customer {
  id: number;
  createdAt: Date;
  birthdate: Date;
  createdBy: User;
  name: string;
  description: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  total?: number;
}
