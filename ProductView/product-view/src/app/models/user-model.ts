export class UserModel {
    id: number;
    id_number: string;
    email :string;
    username: string;
    roles: string[];
    first_name: string;
    last_name: string;
    password: string;
    constructor(
        id?: number,
        id_number?: string,
        email?: string,
        username?: string,
        roles?: string[],
        first_name?: string,
        last_name?: string,
        password?: string
    ){
        this.id = id ? id: 0;
        this.id_number = id_number ? id_number : "";
        this.email = email ? email : "";
        this.username = username ? username: "";
        this.first_name = first_name ? first_name : "";
        this.roles = roles ? roles : new Array<string>();
        this.last_name = last_name ? last_name : "";
        this.password = password ? password : "";
    }
}
