// objects = collections of the related properties  and or methods
//           can represent a real world entity or object( car , human , vehicles  , places etc )
//  object = {key:value , or function()}

const person1 = {
    firstName:"marcus",
    lastName :"aurelias",
    age:24,
    martialStatus:"single",
    favoriteItem:"perugu",
    eat:function(){return `${this.firstName} eats ${this.favoriteItem}`},
    sleep:()=>`${this.firstName}${this.lastName} is hard to sleep during day & night also` ,

}
console.log(person1.eat());
