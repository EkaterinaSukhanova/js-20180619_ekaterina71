/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    var result = 1;
    for(var i = 0; i < n; i++){
        result *= m;
    }
    return +result;
}
