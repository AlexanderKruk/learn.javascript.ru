eratoSieve(100);

function eratoSieve(n) {
    var arr = [0, 0]
    var sum = 0;
    var p = 2;
    var j = 2;

    for (var i = 2; i <= n; i ++) {
        arr[i] = i;
    }

    do{
        while(j * p <= n) {
            arr[j * p] = 0;
            j++;
        }
        do {
            p++;
        } while(arr[p] == 0 || p > n)
        j = 2;
    } while (p * p < n)

    for (var i = 0; i < n; i++) {
        if(arr[i] != 0) {
            sum += arr[i];
        }
    }
    console.log(sum);
}