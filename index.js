

const returnFirstTwoDrivers = function (array) {
    return array.slice(0,2);

}

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
} 

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int) {
    return function (fare) {
        return int * fare;
    }
}



function fareDoubler(fare) {
    const fm = createFareMultiplier(2);
    return fm(fare);
} 

function fareTripler(fare) {
    const ft= createFareMultiplier(3);
    return ft(fare);
}

function selectDifferentDrivers(array, f) {
    return f(array);

}