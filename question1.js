// Create a class that has class/static properties and methods. Show how to use/access them.

// Class definition for a Human
class Human {
    // Static property to track if humans can eat
    static eat = true;
    // Constructor to initialize name, age, country properties
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    static cry(person) {
        console.log(`My name is ${person.name} and my age is ${person.age} and my country is ${person.country} and l do cry`);
    }

}

// Creating an instance of the Human class
person1 = new Human("Tafadzwa", 22, "Zimbabwe");
// Logging the person1 instance to see property values
console.log(person1);

// Accessing static property via class
console.log(Human.eat);
// Call static method, passing the instance
Human.cry(person1);

//Creating  another instance just for testing sake 
x = new Human("Tamia", 24, "Kenya");

console.log(x);
Human.cry(x);
