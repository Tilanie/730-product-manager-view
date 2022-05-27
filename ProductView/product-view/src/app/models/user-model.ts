export class UserModel {
    id: number;
    idNumber: string;
    email :string;
    username: string;
    roles: string[];
    firstName: string;
    lastName: string;
    password: string;
    constructor(
        id?: number,
        idNumber?: string,
        email?: string,
        username?: string,
        roles?: string[],
        firstName?: string,
        lastName?: string,
        password?: string
    ){
        this.id = id ? id: 0;
        this.idNumber = idNumber ? idNumber : "";
        this.email = email ? email : "";
        this.username = username ? username: "";
        this.firstName = firstName ? firstName : "";
        this.roles = roles ? roles : new Array<string>();
        this.lastName = lastName ? lastName : "";
        this.password = password ? password : "";
    }
}
