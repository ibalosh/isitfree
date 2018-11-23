import {User} from "./User";

export class Environment {
    public name: string;
    public taken: boolean;
    public takenAt: Date | null;
    public takenBy: User;

    constructor(name: string) {
        this.name = name;
        this.taken = false;
        this.takenAt = null;
        this.takenBy = new User();
    }

    public take(user: User): void {
        this.taken = true;
        this.takenAt = new Date();
        this.takenBy = user;
    }

    public free(): void {
        this.taken = false;
        this.takenAt = null;
        this.takenBy = new User();
    }

    public getTakenByUser() {
        return this.takenBy.username
    }
}
