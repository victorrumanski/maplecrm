export class Roles {
  USER = 'USER';
  ADMIN = 'ADMIN';
  MANAGER = 'MANAGER';
}

export interface Role {
  name: string;
  description: string;
  granted?: boolean
}