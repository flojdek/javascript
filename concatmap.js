let concatMap = function (f, l) {
    let result = [];
    for (let i = 0; i < l.length; ++i) {
        result = result.concat(f(l[i]));
    }
    return result;
};

print(concatMap(function (x) { return 2 * x; }, [1, 2, 3, 4, 5]));
