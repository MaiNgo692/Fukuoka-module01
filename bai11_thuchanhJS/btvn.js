function primes() {
    let number = +prompt("Nhập vào một số nguyên :");
    let primes = [];
    let count = 0;
    let i = 2;
    while (count < number) {
        if (isPrime(i)) {
            primes.push(i);
            count++;
        }
        i++;
    }
    document.getElementById("result-1").innerHTML =
        `${number} số nguyên tố đầu tiên là: ` + primes;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 0; i <= Math.sqrt(number); i++) {
        if (number % 2 == 0) {
            return false;
        }
    }
    return true;
}

function bai2() {
    // let inputNumbers= prompt("Nhập vào một mảng số cách nhau bằng dấu ',':")
    // let arrNumbers = deleteDoubleNumber(inputNumbers.split(","));
    arrNumbers = [3, 5, 5, 5, 7, 8];
    let result = deleteDoubleNumber(find2NumberSum10(arrNumbers));
    console.log("ket qua" + deleteDoubleNumber(result));
    document.getElementById("result-2").innerHTML =
        `Các cặp số có tổng là 10 là: ` + result;
}
function find2NumberSum10(arr) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == 10) {
                result.push([arr[i] + "-" + arr[j]])
            }
        }
    }
    return result;
}
function deleteDoubleNumber(arr) {
    let result = [];
    let check;
    for (let i = 0; i < arr.length; i++) {
        check = false;
        for (let j = 0; j < result.length; j++) {
            if (result[j][0] == arr[i][0]) {
                check = true;
            }
        }
        if (!check) {
            result.push(arr[i]);
        }
    }
    return result;
}
function bai3() {
    let string = prompt("Nhập vào một chuỗi:");
    let allStrings = [];
    let stringLength = string.length;
    for (let i = 0; i < stringLength; i++) {
        allStrings.push(getMaxString(getAllString(string.slice(i, stringLength))));
    }
    let result = getMaxString(allStrings.reduce((total, value) => {
        return total.concat(value);
    }, []));
    document.getElementById("result-3").innerHTML =
        "Chuỗi có độ dài lớn nhất là: " + Array.from(new Set(result));
}
function getMaxString(arr) {
    let maxLengthString = arr[0].length;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (maxLengthString < arr[i].length) {
            maxLengthString = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (maxLengthString == arr[i].length) {
            result.push(arr[i]);
        }
    }
    return result;
}

function getAllString(string) {
    let result = [];
    for (let i = 0, j = 0; i < string.length; i++) {
        if (string.charCodeAt(i) - string.charCodeAt(i - 1) == 0 || string.slice(j, i - j).includes(string[i])) {
            result.push(string.slice(j, i - j));
            j = i;
        }
        if (i == string.length - 1) {
            result.push(string.slice(j, string.length));
        }
    }
    return result;
}