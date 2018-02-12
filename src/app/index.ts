class Student {
    public fullName: string;

    constructor(public firstName: string, public middleInitial:string, public lastName:string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    middleInitial: string;
    lastName: string;
}

function Greeter(person: Person, student: Student) {
    return "Hello, " + person.firstName + " " + person.lastName + " / fullname: " + student.fullName;
}

const user = new Student("Urs", "uk", "Grüller");
document.body.innerHTML = Greeter(user, user);
