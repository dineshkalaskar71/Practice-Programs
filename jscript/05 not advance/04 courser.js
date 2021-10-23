function doaddition(x){
    return function(y)
    {
        return x+y;
    };
};

var value = doaddition(4);
 
console.log(value(5));

