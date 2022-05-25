import {dep, dep2} from "dep";

console.log(dep.hello("world"));
console.log(dep.world("hello"));
console.log(dep2.foo());
console.log(dep2.bar());
console.log(dep.foo());
console.log(dep.bar());