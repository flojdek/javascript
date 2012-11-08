let getA = function (x) { return x; }
let getB = function (a) { return a; }
let getC = function (b) { return b; }

let unit = function (x) { return x; };

let bind = function (m, f) {
    let ret = m;
    if (ret) {
        return f(ret);
    }
    else {
        return null;
    }
};

print(bind(getA(1),
           function (a) {
               return bind(getB(a),
                           function (b) {
                               return bind(getC(b),
                                           function (c) {
                                               return unit(c);
                                           })
                           })
           })
     );

let obj = {
    property1: {
        property2: 1
    }
};

print(bind(obj,
           function (a) {
               return bind(a.property1,
                           function (b) {
                               return bind(b.property2,
                                           function (c) {
                                               return unit(c);
                                           })
                           })
           })
     );
