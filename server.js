const DontHaveleft =        [0,7,14,21,28,35,42];
const DontHaveFarleft =     [1,8,15,22,29,36,43];
const DontHaveRight =       [6,13,20,27,34,41,48];
const DontHaveFarRight =    [5,12,19,26,33,40,47];
const DontHaveTop =         [0,1,2,3,4,5];
const DontHaveFarTop =      [7,8,9,10,11,12,13];
const DontHavebottom =      [42,43,44,45,46,47,48];
const DontHaveFarbottom =   [35,36,37,38,39,40,41];

function returntheNamsOfarrays(theIndex) {
    // تعريف المصفوفات وأسمائها
    const arrays = {
        DontHaveleft,
        DontHaveFarleft,
        DontHaveRight,
        DontHaveFarRight,
        DontHaveTop,
        DontHaveFarTop,
        DontHavebottom,
        DontHaveFarbottom
    };

    // البحث عن الرقم في المصفوفات
    let foundInArrays = [];
    for (let arrayName in arrays) {
        if (arrays[arrayName].includes(theIndex)) {
            foundInArrays.push(arrayName);
        }
    }
    if(foundInArrays.length>0){
        return foundInArrays;
    }else{
        return 0;
    }
}

// مثال على استخدام الدالة
console.log(returntheNamsOfarrays(33));