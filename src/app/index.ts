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
    return "Test, " + person.firstName + " " + person.lastName + " / fullname: " + student.fullName;
}

const user = new Student("Peter", "uk", "Pest");
document.body.innerHTML = Greeter(user, user);
