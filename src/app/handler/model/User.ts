/**
 * Users model.
 */
export class User {
    public username: string;
    public id: string;

    constructor(username: string = '', id: string = '') {
        this.username = username;
        this.id = id;
    }
}

