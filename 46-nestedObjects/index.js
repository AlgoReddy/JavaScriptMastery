//nested objects = creating a objects inside the another objects

const person={
    fullName :"spongeBob SquarePants",
    age:40,
    job:"comedian",
    shirtColors:["oliveGreen", "mustard","tango","indigo"],
    address:{
        streetName:"westinchruch cross2",
        area:"kyderabad",
        city:"int. waters"
    }

}
console.log(person.fullName)
console.log(person.age)
console.log(person.job)
console.log(person.shirtColors)
console.log(person.address)
console.log(person.address.streetName)
console.log(person.address.area)
console.log(person.address.city)

class Person{
    constructor(name , age , ... address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);
    }
}
class Address{
    constructor(street , city, country){
        this.street=street;
        this.city=city;
        this.country=country;
    }
}
console.log("this is persona")
const persona = new Person("ram",90000,"dasharadhaHome","ayodha","India","earth");
console.log(persona);
console.log(persona.address)
console.log(persona.address.street)
console.log(persona.address.city)
console.log(persona.address.country)
console.log(persona.address);
