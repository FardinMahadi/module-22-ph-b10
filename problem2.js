function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("It's a leap year.😁");
  } else {
    console.log("It's not a leap year.🥲");
  }
}

isLeapYear(4000);
isLeapYear(2023);
isLeapYear(2400);
isLeapYear(2022);
