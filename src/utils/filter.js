/**
 * 金额过滤器
 * @param {*} val 
 */
const moneyFilter = function (value) {
    value = value.toString();
    if (!value) return '0.00';
    var intPart = Number(value).toFixed(0); // 获取整数部分
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); // 将整数部分逢三一断
    var floatPart = '.00'; // 预定义小数部分
    var value2Array = value.split('.');
    if (value2Array.length === 2) { // =2表示数据有小数位
        floatPart = value2Array[1].toString(); // 拿到小数部分
        if (floatPart.length === 1) { // 补0,实际上用不着
            return intPartFormat + '.' + floatPart + '0';
        } else {
            return intPartFormat + '.' + floatPart;
        }
    } else {
        return intPartFormat + floatPart;
    }
}

const hideMiddle = function (val) {
    val = val.toString();
    var res = "****    " + "****    " + "****    "+"**" + val.substring(val.length - 2, val.length);
    return res;
}


export {
    moneyFilter, hideMiddle
}