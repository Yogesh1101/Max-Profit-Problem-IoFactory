function calculateMaxProfit(n) {
  let data = {
    units: [5, 4, 10],
    earnings: [1500, 1000, 3000],
  };

  var minUnit = Math.min(...data.units),
    totalEarningArray = [];

  var tempResult = data.units.map((value, index) => {
    var input = n,
      earnings = 0,
      tempArray = [];
    while (input >= minUnit) {
      input -= value;
      if (input >= 0) {
        earnings += input * data.earnings[index];
        tempArray.push(earnings);
      }
    }
    totalEarningArray.push(earnings);
    return tempArray;
  });

  var maxEarning = Math.max(...totalEarningArray);

  var totalOutputArray = totalEarningArray.map((value, index) =>
    maxEarning === value ? tempResult[index].length : 0
  );

  var output = totalOutputArray
    .map((value, index) =>
      value !== 0
        ? `${index + 1}. T: ${index === 0 ? value : 0} P: ${
            index === 1 ? value : 0
          } C: ${index === 2 ? value : 0}\n`
        : ""
    )
    .join("");

  console.log(
    `Time Unit: ${n}\nEarnings: $${maxEarning}\nSolutions \n${output}`
  );
}

calculateMaxProfit(13);
