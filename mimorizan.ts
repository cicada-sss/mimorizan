let outputKanji = (passingValue: string, stringsInputNumber?: string) => {
  let inputNumber = Number(stringsInputNumber);
  let returnUnit = "";
  const convertNumberToJapaneseObject: object = {
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
    } else if (inputNumber >= 1000) {
      returnUnit = "千";
    } else if (inputNumber >= 100) {
      returnUnit = "百";
    } else if (inputNumber >= 10) {
      returnUnit = "十";
    }
  }
  return convertNumberToJapaneseObject[passingValue] + returnUnit;
};

let mimori = (inputNumber: number) => {
  interface CharCode {
    first?: number;
    second?: number;
    addition?: number;
  }
  let charCode: CharCode = {};
  let stringsInputNumber = String(inputNumber);
  let finallyOutput: string = "";
  if (inputNumber >= 100000 || typeof inputNumber !== "number") {
    console.log("ダーメです");
    stop;
  }
  if (inputNumber >= 10000) {
    finallyOutput =
      finallyOutput +
      outputKanji(
        stringsInputNumber.slice(-5, -4),
        stringsInputNumber.slice(-5)
      );
  }
  if (inputNumber >= 1000) {
    finallyOutput =
      finallyOutput +
      outputKanji(
        stringsInputNumber.slice(-4, -3),
        stringsInputNumber.slice(-4)
      );
  }
  if (inputNumber >= 100) {
    finallyOutput =
      finallyOutput +
      outputKanji(
        stringsInputNumber.slice(-3, -2),
        stringsInputNumber.slice(-3)
      );
  }
  if (inputNumber >= 10) {
    finallyOutput =
      finallyOutput +
      outputKanji(
        stringsInputNumber.slice(-2, -1),
        stringsInputNumber.slice(-2)
      );
  }
  finallyOutput += outputKanji(String(inputNumber % 10));
  if (inputNumber >= 4) {
    for (let i = 0; i < Math.floor(inputNumber / 4); i++) {
      finallyOutput += "𣛧";
    }
  }
  let b1 = inputNumber % 4;
  const convertNumberToTreeObject: object = {
    0: "",
    1: "木",
    2: "林",
    3: "森"
  };
  finallyOutput += convertNumberToTreeObject[b1];
  let whenThereAreFirstAndSecondCharCode = passingCharCode => {
    charCode.first = passingCharCode + charCode.addition;
    charCode.second = passingCharCode + 1 + charCode.addition;
    finallyOutput +=
      String.fromCharCode(charCode.first) +
      String.fromCharCode(charCode.second);
  };
  let whenThereAreFirstCharCodeOnly = passingCharCode => {
    charCode.first = passingCharCode + charCode.addition;
    finallyOutput +=
      String.fromCharCode(charCode.first) + String.fromCharCode(charCode.first);
  };
  if (inputNumber >= 0 && inputNumber < 8) {
    charCode.addition = (inputNumber - 1) * 2;
    whenThereAreFirstAndSecondCharCode(12373);
    finallyOutput += "こ";
  } else if (inputNumber >= 8 && inputNumber < 11) {
    charCode.addition = (inputNumber - 1) * 2;
    charCode.addition++;
    whenThereAreFirstAndSecondCharCode(12373);
    finallyOutput += "こ";
  } else if (inputNumber >= 11 && inputNumber < 16) {
    charCode.addition = inputNumber - 1 + 10;
    charCode.addition++;
    whenThereAreFirstCharCodeOnly(12373);
    finallyOutput += "゛こ";
  } else if (inputNumber >= 16 && inputNumber < 21) {
    charCode.addition = (inputNumber - 16) * 3;
    whenThereAreFirstAndSecondCharCode(12399);
    finallyOutput += "こ";
  } else if (inputNumber >= 21 && inputNumber < 26) {
    charCode.addition = inputNumber - 21;
    whenThereAreFirstCharCodeOnly(12414);
    finallyOutput += "゛こ";
  } else if (inputNumber >= 26 && inputNumber < 29) {
    charCode.addition = (inputNumber - 26) * 2;
    whenThereAreFirstCharCodeOnly(12420);
    finallyOutput += "゛こ";
  } else if (inputNumber >= 29 && inputNumber < 34) {
    charCode.addition = inputNumber - 29;
    whenThereAreFirstCharCodeOnly(12425);
    finallyOutput += "゛こ";
  } else if (inputNumber >= 34) {
    charCode.addition = inputNumber - 34;
    whenThereAreFirstCharCodeOnly(12431);
    finallyOutput += "゛こ";
  } else if (inputNumber >= 39) {
    charCode.addition = inputNumber - 34;
    whenThereAreFirstAndSecondCharCode(12436);
    finallyOutput += "゛こ";
  }
  console.log(finallyOutput);
};
