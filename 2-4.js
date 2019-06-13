//列出a與b之間， 能被3、5、7整除的數
function m357(a, b) {
    for (var i = a; i <= b; i++) {
        if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0)
            console.log(i);
    }
}
m357(10, 15);
