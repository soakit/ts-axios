interface Person {
    firstName: string;
    lastName: string;
}

function greet(p: Person) {
    console.log(
        `hello ${p.firstName} ${p.lastName}`
    );
}

var user: Person = {
    firstName: 'san',
    lastName: 'zhang'
}

greet(user);