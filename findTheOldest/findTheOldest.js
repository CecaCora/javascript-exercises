let findTheOldest = function (people) {
  currentYear = new Date().getFullYear();

  sortOldest = people.sort((a, b) => {
    let personA = (a?.yearOfDeath || currentYear) - a.yearOfBirth;
    let personB = (b?.yearOfDeath || currentYear) - b.yearOfBirth;

    return personA > personB ? -1 : 1;
  });

  return sortOldest[0];
};

module.exports = findTheOldest;
