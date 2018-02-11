export class Student {
    private fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

export interface Person {
    firstName: string;
    lastName: string;
}

export function Greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}