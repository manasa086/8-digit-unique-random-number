let func = function(r) {
    if (r.length < 8) {
        r += Math.floor(Math.random() * 10).toString();
        return func(r);
    } else {
        document.getElementById('p').innerHTML = "<span>8 Digit  Unique Random Number is:</span>" + r;
    }
    return r;
}