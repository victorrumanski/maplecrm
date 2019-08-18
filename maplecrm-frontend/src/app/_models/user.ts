export class User {
    id: number;
    email: string;
    password: string;
    name: string;
    roles: string[];
    token?: string;
}