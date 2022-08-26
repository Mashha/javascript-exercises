
const findTheOldest = function(people) {
    //loop over the array and add current year to those without death
    let currentYear = (new Date().getFullYear())
    
    for(let i = 0; i < people.length; i++) {
        if(!people[i].yearOfDeath) {
             people[i]["yearOfDeath"] = currentYear
        }
        
        // sort over the array, can also add age and sort over that
        let oldest = people.sort(function(first, next) {
            let firstPerson = first.yearOfDeath - first.yearOfBirth
            let nextPerson = next.yearOfDeath - next.yearOfBirth

            if(firstPerson > nextPerson) {
                return -1
            }  else {
                return 1
            }
        })
        return oldest[0]
    }
};


//console.log(findTheOldest( people))
// Do not edit below this line
module.exports = findTheOldest;
