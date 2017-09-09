const big = require(".");

// Makes a hex-based interface for the bignum lib
const bnmn = (() => {
  var f = f => a => b => big.hex(big[f](big.big(a))(big.big(b)));
  return {
    add: f("add"),
    sub: f("sub"),
    mul: f("mul"),
    div: f("div"),
    mod: f("mod"),
  }
})();

// Makes a BNJS library with the same interface, to compare
const BN = require("bn.js");
const bnjs = (() => {
  var f = f => a => b => {
    var x = new BN(a.slice(2), "hex");
    var y = new BN(b.slice(2), "hex");
    var z = x[f](y);
    var r = z.ltn(new BN(0)) ? new BN(0) : z;
    return "0x" + r.toString(16);
  }
  return {
    add: f("add"),
    sub: f("sub"),
    mul: f("mul"),
    div: f("div"),
    mod: f("mod"),
  }
})();

// Makes a random bignum
var rnd = (l) => {
  var n = "0x";
  for (var i = 0, l = (l || Math.random() * 256); i < l; ++i) {
    n += (Math.random() * 16 | 0).toString(16);
  }
  return n;
};

// Tests against BN.js
console.log("Testing Moon's bignum against BN.js with random inputs.");
for (var i = 0; i < 32; ++i) {
  var a = rnd();
  var b = rnd();
  ["add","sub","mul","div","mod"].forEach(f => {
    if (!(bnjs[f](a)(b) === bnmn[f](a)(b))) {
      throw ("Error on "+f+" function, inputs:\n- "+a+"\n-"+b);
    }
    console.log(f+"(a,b), test "+i+": ok");
  });
}

// Benchmarks
console.log("Benchmarking Moon's bignum against BN.js");
for (var i = 0; i < 32; ++i) {
  var l = i * 256;
  console.log(":: SIZE " + l);
  ["add","sub","mul","div"].forEach(f => {
    var a = rnd(l);
    var b = rnd(l/2);
    var t = Date.now();
    bnjs[f](a)(b);
    var bnjst = (Date.now() - t) / 1000;
    var t = Date.now();
    bnmn[f](a)(b);
    var bnmnt = (Date.now() - t) / 1000;
    console.log("- bnjs " + f + ":" + bnjst.toFixed(2) + "s");
    console.log("- bnmn " + f + ":" + bnmnt.toFixed(2) + "s");
  });
  console.log("\n");
};


