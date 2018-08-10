function one(a, cb1){
    console.log(a)
    cb1(a+1,function (c,cb3) {
        console.log(c)
        cb3(c+1)
    })
};

one(1,function (b,cb2) {
    console.log(b)
    cb2(b+1,function (d) {
        console.log(d)
    })
});