function lifeInWeek(age){
    var yearRenaming = 90-age;
    var daysRenaming = yearRenaming*365;
    var weeksRenaming = yearRenaming*52;
    var monthRenaming = yearRenaming*12;

console.log("You have" + daysRenaming + "days," + weeksRenaming + "Weeks," + monthRenaming + "Months");
}
lifeInWeek(20);