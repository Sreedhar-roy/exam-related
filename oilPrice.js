function oilPrice(dieselPrice, petrolPrice, octanePrice){
    const totalPrice = dPriceieselContainer*dieselOilPrice + petrolContainer*petrolOilPrice + octaneContainer*octaneOilPrice;
    return totalPrice;
}

const dieselOilContainer = 0; //Price per litre = 114
const petrolOilContainer = 2; //Price per litre = 130
const octaneOilContainer = 3; //Price per litre = 135

const averagePrice = oilPrice(114, 130, 135);
console.log('average oil price', averagePrice);