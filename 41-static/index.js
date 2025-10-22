// static = keyword that defines the properties or functions to the class itself rather than the objects created from that class
// to access the elements /properties/functions which are static we need to use the class while calling instead of the name of that object

class MathUtil {
  static PI = 3.1432;
  static getDiameter(radius) {
    return radius * 2;
  }
  static getArea(radius) {
    return 2 * MathUtil.PI * radius;
  }
}

console.log(MathUtil.getArea(34));

console.log(MathUtil.getArea(89));
class User {
  static userCount = 0;
  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }
}
const user1 = new User("ram");
const user2 = new User("sita");
const user3 = new User("ravan");
console.log(user1);
console.log(user2);
console.log(user3);
console.log(User.userCount);
console.log();
