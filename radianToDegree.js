function radianToDegree(radian){
    const Degree = radian*57.2957795;
    return Degree;
}

const degreeConversion = 199;
const degreeres = radianToDegree(degreeConversion);
console.log(degreeres);