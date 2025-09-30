function arrayInfo(arr) {
        let integers = null;
        let floatNum = null;
        let stringChar = null;
        let whitespaces = null;
    
        if (arr.length === 0) return "Nothing in the array!";

        for (let i = 0; i <= arr.length - 1; i += 1) {
          if (Number.isInteger(arr[i])) {
            integers += 1;
          } else if (typeof arr[i] === "number") {
            floatNum += 1;
          } else if (arr[i] + 1 === " 1") {
            whitespaces += 1;
          } else if (typeof arr[i] === "string") {
            stringChar += 1;
          }
        }

        return [
          [arr.length],
          [integers],
          [floatNum],
          [stringChar],
          [whitespaces],
        ];
      }