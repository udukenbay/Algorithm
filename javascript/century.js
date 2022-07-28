function getCentury(year) {
    if(year.toString().substring(year.length-1) == "1") {
        return year;
    }
}

console.log(getCentury(1705));
console.log(getCentury(1900));
console.log(getCentury(1601));
console.log(getCentury(2000));