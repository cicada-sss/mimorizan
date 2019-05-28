var kanjidasu = function (passingValue, stringsInputNumber) {
    var inputNumber = Number(stringsInputNumber);
    var returnUnit = "";
    var dogSwitch = {
        "1": "一",
        "2": "二",
        "3": "三",
        "4": "四",
        "5": "五",
        "6": "六",
        "7": "七",
        "8": "八",
        "9": "九"
    };
    if (passingValue !== "0") {
        if (inputNumber >= 10000) {
            returnUnit = "万";
        }
        else if (inputNumber >= 1000) {
            returnUnit = "千";
        }
        else if (inputNumber >= 100) {
            returnUnit = "百";
        }
        else if (inputNumber >= 10) {
            returnUnit = "十";
        }
    }
    return dogSwitch[passingValue] + returnUnit;
};
var mimori = function (inputNumber) {
    var charCode = {};
    var stringsInputNumber = String(inputNumber);
    var syuturyoku = "";
    if (inputNumber >= 100000 || typeof inputNumber !== "number") {
        console.log("ダーメです");
        stop;
    }
    if (inputNumber >= 10000) {
        syuturyoku =
            syuturyoku +
                kanjidasu(stringsInputNumber.slice(-5, -4), stringsInputNumber.slice(-5));
    }
    if (inputNumber >= 1000) {
        syuturyoku =
            syuturyoku +
                kanjidasu(stringsInputNumber.slice(-4, -3), stringsInputNumber.slice(-4));
    }
    if (inputNumber >= 100) {
        syuturyoku =
            syuturyoku +
                kanjidasu(stringsInputNumber.slice(-3, -2), stringsInputNumber.slice(-3));
    }
    if (inputNumber >= 10) {
        syuturyoku =
            syuturyoku +
                kanjidasu(stringsInputNumber.slice(-2, -1), stringsInputNumber.slice(-2));
    }
    var c = String(inputNumber % 10);
    syuturyoku += kanjidasu(c);
    if (inputNumber >= 4) {
        for (var i = 0; i < Math.floor(inputNumber / 4); i++) {
            syuturyoku += "𣛧";
        }
    }
    var b1 = inputNumber % 4;
    var dogSwitch = {
        0: "",
        1: "木",
        2: "林",
        3: "森"
    };
    syuturyoku += dogSwitch[b1];
    var whenThereAreFirstAndSecondCharCode = function (passingCharCode) {
        charCode.first = passingCharCode + charCode.addition;
        charCode.second = passingCharCode + 1 + charCode.addition;
        syuturyoku +=
            String.fromCharCode(charCode.first) +
                String.fromCharCode(charCode.second);
    };
    var whenThereAreFirstCharCodeOnly = function (passingCharCode) {
        charCode.first = passingCharCode + charCode.addition;
        syuturyoku +=
            String.fromCharCode(charCode.first) + String.fromCharCode(charCode.first);
    };
    if (inputNumber >= 0 && inputNumber < 8) {
        charCode.addition = (inputNumber - 1) * 2;
        whenThereAreFirstAndSecondCharCode(12373);
        syuturyoku += "こ";
    }
    else if (inputNumber >= 8 && inputNumber < 11) {
        charCode.addition = (inputNumber - 1) * 2;
        charCode.addition++;
        whenThereAreFirstAndSecondCharCode(12373);
        syuturyoku += "こ";
    }
    else if (inputNumber >= 11 && inputNumber < 16) {
        charCode.addition = inputNumber - 1 + 10;
        charCode.addition++;
        whenThereAreFirstCharCodeOnly(12373);
        syuturyoku += "゛こ";
    }
    else if (inputNumber >= 16 && inputNumber < 21) {
        charCode.addition = (inputNumber - 16) * 3;
        whenThereAreFirstAndSecondCharCode(12399);
        syuturyoku += "こ";
    }
    else if (inputNumber >= 21 && inputNumber < 26) {
        charCode.addition = inputNumber - 21;
        whenThereAreFirstCharCodeOnly(12414);
        syuturyoku += "゛こ";
    }
    else if (inputNumber >= 26 && inputNumber < 29) {
        charCode.addition = (inputNumber - 26) * 2;
        whenThereAreFirstCharCodeOnly(12420);
        syuturyoku += "゛こ";
    }
    else if (inputNumber >= 29 && inputNumber < 34) {
        charCode.addition = inputNumber - 29;
        whenThereAreFirstCharCodeOnly(12425);
        syuturyoku += "゛こ";
    }
    else if (inputNumber >= 34) {
        charCode.addition = inputNumber - 34;
        whenThereAreFirstCharCodeOnly(12431);
        syuturyoku += "゛こ";
    }
    else if (inputNumber >= 39) {
        charCode.addition = inputNumber - 34;
        whenThereAreFirstAndSecondCharCode(12436);
        syuturyoku += "゛こ";
    }
    console.log(syuturyoku);
};
