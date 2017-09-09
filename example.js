const big = require(".");

const a = big.big("0x11111111222222223333333344444444333333332222222211111111");
const b = big.big("0x2");
console.log("a:", big.hex(a));
console.log("b:", big.hex(b));
console.log("add:", big.hex(big.add(a)(b)));
console.log("sub:", big.hex(big.sub(a)(b)));
console.log("mul:", big.hex(big.mul(a)(b)));
console.log("div:", big.hex(big.div(a)(b)));
console.log("mod:", big.hex(big.mod(a)(b)));
