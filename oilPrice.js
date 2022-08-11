function oilPrice(dieselContainer, petrolContainer, octaneContainer){
    const totalPrice = dieselContainer*dieselOilPrice + petrolContainer*petrolOilPrice + octaneContainer*octaneOilPrice;
    return totalPrice;
}

const dieselOilPrice = 0;
const petrolOilPrice = 2;
const octaneOilPrice = 3;

const averagePrice = oilPrice(114, 130, 135);
console.log('average oil price', averagePrice);