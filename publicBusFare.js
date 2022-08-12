 function publicBusFare(public){
    const bus = 50;      //You can go by bus 50
    const micro = 11;   // You can go by micro 11
    const busDivisible =public % bus;
    const microDivisible = busDivisible % micro;
    const publicBus = microDivisible * 250; //Public bus fare 250 tk
    return publicBus;
 }
 const BusFare = publicBusFare(235);
 console.log(BusFare);