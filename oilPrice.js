function oilPrice(dieselPrice, petrolPrice, octanePrice){
    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    const average = totalPrice / 3;
    return average;
}

const dieselOilPrice = 60;
const petrolOilPrice = 58;
const octaneOilPrice = 59;

const averagePrice = oilPrice(dieselOilPrice, petrolOilPrice, octaneOilPrice);
console.log('average oil price', averagePrice);
