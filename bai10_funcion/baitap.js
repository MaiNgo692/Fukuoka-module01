//Bài 1: Tìm số bé nhất
function findMinNumber() {
    let inputNumber = prompt('Hãy nhập 3 số ngăn cách nhau bằng dấu "," :');
    let numbers = inputNumber.split(",");
    let min = numbers[0];
    for (let i = 0; i < 3; i++) {
        if (min > numbers[i]) {
            min = numbers[i];
        }
    }
    document.getElementById("result-1").innerHTML =
        `Số nhỏ nhất trong ${inputNumber} là: ` + min;
};

//Bài 2: Kiểm tra số nguyên tố
function checkPrimeNumber() {
    let inputNumber = +prompt('Hãy nhập vào 1 số:');
    if (Number.isInteger(inputNumber) & inputNumber > 0) {
        let count = 0;
        for (let i = 1; i <= inputNumber; i++) {
            if (inputNumber % i == 0) {
                count += 1;
            }
        }
        if (count == 2) {
            document.getElementById("result-2").innerHTML =
                `Số ${inputNumber} là một số nguyên tố. `;
        } else {
            document.getElementById("result-2").innerHTML =
                `Số ${inputNumber} không phải là một số nguyên tố. `;
        }

    } else {
        alert('Hãy nhập một số nguyên dương để kiểm tra!')
    }
};

//Bài 3: Tính giai thừa
function factorial() {
    let inputNumber = +prompt('Hãy nhập vào 1 số:');
    if (Number.isInteger(inputNumber)) {
        document.getElementById("result-3").innerHTML =
            `Giai thừa của ${inputNumber} là: ${factorial1(inputNumber)} `;
    } else {
        alert('Hãy nhập một số nguyên để kiểm tra!')
    }
};
function factorial1(number) {
    if (number == 1) return 1;
    return number * factorial1(--number);
};

//Bài 4: Tìm cặp số trong mảng
function findPairNumSum10() {
    let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let arrayLenght = arrayNumber.length;
    let arrayResult = [];
    for (let i = 0; i < arrayLenght - 1; i++) {
        for (let j = i + 1; j < arrayLenght; j++) {
            if (arrayNumber[i] + arrayNumber[j] == 10) {
                arrayResult.push([arrayNumber[i] + "-" + arrayNumber[j]]);
            }
        }
    }
    document.getElementById("result-4").innerHTML =
        `Các cặp số có tổng bằng 10 trong ${arrayNumber} là: ${arrayResult} `;
};

//Bài 5: Kiểm tra tần suất xuất hiện mỗi kí tự
function frequencyOfChar() {
    let inputString = prompt('Hãy nhập vào 1 chuỗi:');
    let resultInput = []; //Mảng kết quả chứa kí tự và số ký tự của nó
    let inputStringLength = inputString.length;
    for (let i = 0, count = 0; i < inputStringLength - 1; i++) {
        for (let j = 0; j < inputStringLength; j++) {
            if (inputString[i] == inputString[j]) {
                count += 1; // đếm số lần xuất hiện kí tự trong mảng
            }
        }
        let countZ = 0; // Kiểm tra xem trng mảng kết quả đã có kí tự thứ i hay chưa
        for (let z = 0; z < resultInput.length; z++) {
            if (resultInput[z][0] == inputString[i]) {
                countZ += 1;
            }
        }
        // Nếu chưa có thì thêm vào mảng kết quả
        if (countZ == 0) {
            resultInput.push([inputString[i], count]); 
        }
        count = 0;
    }
    let resultLength = resultInput.length;
    let prinRresult = [];
    for (let i = 0; i < resultLength; i++) {
        console.log(resultInput[i][0], resultInput[i][1]);
        prinRresult.push(`Kí tự ${resultInput[i][0]} xuất hiện ${resultInput[i][1]} lần. <br> `)
    }
    document.getElementById("result-5").innerHTML =
        `Kết quả: <br> ${prinRresult.join("")} `;
};