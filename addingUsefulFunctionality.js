Array.range = function(start, count) {
    var arr = [];
    while (count >0){
        arr.push(start++);
        count--;
    }
    return arr;
};

Array.prototype.sum = function() {
    return this.reduce(function(a,b){
        return a + b;
    }, 0);
};