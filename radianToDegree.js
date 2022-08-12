function radianToDegree(radian){
    const Degree = radian * 57.2957795; //(1 radian = 57.2957795 degrees)
    return Degree;
}

const degreeConversion = 199;
const degreeres = radianToDegree(degreeConversion);
console.log("radianToDegree :", degreeres);