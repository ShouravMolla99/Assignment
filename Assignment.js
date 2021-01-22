

//https://github.com/ShouravMolla99/Assignment

// 01 - kilometerToMeter Problem Solving

function kilometerToMeter(kilometer) {
    var getMeter = kilometer * 1000;
    return getMeter;
}
var result = kilometerToMeter(1);
console.log(result);


// 02 - budgetCalculator Problem Solving

function budgetCalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}

var budgetResult = budgetCalculator(1, 2, 3);
console.log(budgetResult);


// 03 -  hotelCost Problem Solving

function hotelCost(dayCount) {
    var totalPrice = 0;
    if (dayCount <= 10) {
        totalPrice = dayCount * 100;
    } else if (dayCount <= 20) {
        var firstStayCost = 10 * 100;
        var secondStay = dayCount - 10;
        var secondStayCost = secondStay * 80;
        var totalPrice = firstStayCost + secondStayCost;
    } else {
        var firstStayCost = 10 * 100;
        var secondStayCost = 10 * 80;
        var thirdStay = dayCount - 20;
        var thirdStayCost = thirdStay * 50;
        var totalPrice = firstStayCost + secondStayCost + thirdStayCost;
    }
    return totalPrice;
}

var getHotelCost = hotelCost(21);
console.log(getHotelCost);


// 04 - megaFriend Problem Solving

function megaFriend(friendsName) {
    var lengthyName = '';
    for (var i = 0; i < friendsName.length; i++) {
        if (lengthyName.length < friendsName[i].length) {
            lengthyName = friendsName[i];
        }
    }
    return lengthyName;
}
var getMegaFriend = megaFriend([
    'Salman Arefin',
    'Shourav Hossen',
    'Rupa akter',
    'Tania Rahman',
]);
console.log(getMegaFriend);
