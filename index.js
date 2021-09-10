function findMatching(drivingArray, name) {
    return drivingArray.filter(function(obj) {
        return obj.toLowerCase() === name.toLowerCase();
    });
  }

function fuzzyMatch(drivingArray, letters) {
    return drivingArray.filter(obj => obj.startsWith(letters));
}

function matchName(drivingArray,driver){
    return drivingArray.filter(obj => obj.name === driver);
}