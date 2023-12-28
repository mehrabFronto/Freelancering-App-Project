export function toPersianDigits(n) {
   const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
   return n.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);
}

export function numberWithCommas(number) {
   const numberArr = number.toString().split("");
   for (let i = numberArr.length - 3; i >= 1; i = i - 3) {
      numberArr.splice(i, undefined, ",");
   }
   return numberArr.join("");
}

export function toPersianDigitsWithCommas(n) {
   const persianDigits = toPersianDigits(n);
   const persianDigitsWithCommas = numberWithCommas(persianDigits);
   return persianDigitsWithCommas;
}
