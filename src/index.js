// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var sum = currency;
    var result = {};
    if (sum >= 10000) {
        result = { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        var i = 0;
        while (sum >= 50) {
            sum = sum - 50;
            i++;
            if (sum < 50) { break };
        };
        if (i > 0) result.H = i;

        var j = 0;
        while (sum >= 25) {
            sum = sum - 25;
            j++;
            if (sum < 25) { break };
        };
        if (j > 0) result.Q = j;

        var k = 0;
        while (sum >= 10) {
            sum = sum - 10;
            k++;
            if (sum < 10) { break };
        };
        if (k > 0) result.D = k;

        var m = 0;
        while (sum >= 5) {
            sum = sum - 5;
            m++;
            if (sum < 5) { break };
        };
        if (m > 0) result.N = m;

        var n = 0;
        while (sum >= 1) {
            sum = sum - 1;
            n++;
            if (sum < 1) { break };
        };
        if (n > 0) result.P = n;
    }
    return result;
}