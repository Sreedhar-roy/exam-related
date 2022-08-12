 function publicBusFare(number){
    const bus = 50;
    const micro = 11;
    const busDivisible =number % bus;
    const microDivisible = busDivisible % micro;
    const publicBus = microDivisible * 250;
    return publicBus;
 }
 const BusFare = publicBusFare(235);
 console.log(BusFare);