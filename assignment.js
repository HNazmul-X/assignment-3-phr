//https://github.com/Najmull/assignment-3-phr






/**
 * Kilometer to meter funtion are here;
 */
function kilometerToMeter(num) {
  return num * 1000;
}










/**
 * budget calculator are here;
 */
function budgetCalculator(clock, phone, laptop) {
  var clockPrice = clock * 50;
  var phonePrice = phone * 100;
  var laptopPrice = laptop * 500;
  clockPrice = parseFloat(clockPrice);
  phonePrice = parseFloat(phonePrice);
  laptopPrice = parseFloat(laptopPrice);

  return clockPrice + phonePrice + laptopPrice;
}











/**
 * Hotelcost Funtion are here
 */
function hotelCost(num) {
  if (num <= 10) {
    var totalPrice = num * 100;
    return totalPrice;
  } else if (num <= 20) {
    var night = num - 10;
    var totalPrice = night * 80 + (num - night) * 100;
    return totalPrice;
  } else {
    var thirdNight = num - 20;
    var secondNight = num - (thirdNight + 10);
    var totalPrice =
      thirdNight * 50 +
      secondNight * 80 +(num - (thirdNight + secondNight)) * 100;
    return totalPrice;
  }
}












/**
 * megaFriendt Funtion Are here
 */
function megaFriend(items) {
  var megaFriendName = items[0];
  for (var i = 0; i < items.length; i++) {
    var friends = items[i];
    if (megaFriendName.length < friends.length) {
      megaFriendName = friends;
    }
  }
  return megaFriendName;
}

