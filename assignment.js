/* ----------------
    Problem one 
------------------*/
function seerToMon(seer) {
    if (typeof seer != "number") {
        return "please give a number!";
    }
    const mon = seer / 40;
    return mon;
}
const mon = seerToMon(80);
console.log(mon);

/*----------------
    Problem Two
-----------------*/
function totalSales(shirt, pant, shoe) {
    if (typeof shirt != "number" || typeof pant != "number" || typeof shoe != "number") {
        return "please give a number!";
    }
    const priceOfOneShirt = 100;
    const priceOfOnePant = 200;
    const priceOfOneShoe = 500;
    // Price Claculation
    const shirtPrice = shirt * priceOfOneShirt;
    const pantPrice = pant * priceOfOnePant;
    const shoePrice = shoe * priceOfOneShoe;
    // Total price
    const totalPrice = shirtPrice + pantPrice + shoePrice;
    return totalPrice;
}
const yourPrice = totalSales(2, 0, 1);
console.log(yourPrice);

/*-----------------
    Problem Three
-------------------*/
function deliveryCost(amount) {
    if (typeof amount != "number") {
        return "please give a number!";
    }
    const costOf100OrLess = 100;
    const costOf100MoreBut200Less = 80;
    const costOfMoreThan200 = 50;
    // if the cost is below 100 and up to 100
    if (amount <= 100) {
        const price = amount * 100;
        return price;
    }
    // if more then 100 and up to 200
    else if (100 < amount && amount <= 200) {
        const deliveryMoreThan100 = 100 * costOf100OrLess;
        const restAmount = amount - 100;
        const deliveryIn200 = restAmount * costOf100MoreBut200Less;
        const totalPrice = deliveryMoreThan100 + deliveryIn200;
        return totalPrice;
    }
    // if more then 200
    else {
        const deliveryMoreThan100 = 100 * costOf100OrLess;
        const deliveryIn200 = 100 * costOf100MoreBut200Less;
        const restAmount = amount - 200;
        const deliveryMoreThen200 = restAmount * costOfMoreThan200;
        const totalPrice = deliveryMoreThan100 + deliveryIn200 + deliveryMoreThen200;
        return totalPrice;
    }

}
const price = deliveryCost(220);
console.log(price);

/*----------------
    Problem Four
-----------------*/
function perfectFriend(myFriends) {
    // when input value is not arry 
    if (typeof myFriends == "number") {
        return "please give a arry!";
    }
    for (let i = 0; i < myFriends.length; i++) {
        const friend = myFriends[i];
        if (friend.length == 5) {
            return friend;
        }
    }
}
const friendName = perfectFriend(["robiul", "mehide", "adnan", "nazmul", "solaiman"]);
console.log(friendName);