let getA = function (x) { return x; }
let getB = function (a) { return a; }
let getC = function (b) { return b; }

let unit = function (x) { return x; };

let bind = function (m, f) {
    let result = m;
    if (result) {
        return f(result);
    }
    else {
        return null;
    }
};

let pipe = function (m, fs) {
    let result = m;
    for (let i = 0; i < fs.length; ++i) {
        result = bind(result, fs[i]);
    }
    return result;
};

print(bind(unit(666),
           function (x) {
               return bind(getA(x),
                           function (a) {
                               return bind(getB(a),
                                           function (b) {
                                               return bind(getC(b),
                                                           function (c) {
                                                               return unit(c);
                                                           })
                                           })
                           })
            })
     );

print(bind(bind(bind(unit(666), getA), getB), getC));

print(pipe(unit(666), [getA, getB, getC]));

let obj = {
    property1: {
        property2: 666
    }
};

print(bind(unit(obj),
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
