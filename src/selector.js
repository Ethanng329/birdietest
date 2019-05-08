export function filteredTable(rawData, filterType) {
  let output = [];
  const uniqueList = getUniquelist(rawData, filterType);

  uniqueList.map(item => {
    let tally = 0;
    let average = 0;
    rawData.forEach(ele => {
      if (ele[filterType] === item) {
        tally++;
        average += ele.age;
      }
    });

    return output.push({ item: item, count: tally, age: average / tally });
  });

  const sortedData = output.sort((a, b) => {
    return b.count - a.count;
  });

  return sortedData;
}

export function getUniquelist(rawData, filterType) {
  const uniqueKeys = rawData.reduce((accu, item) => {
    if (!accu[item[filterType]]) {
      accu[item[filterType]] = 1;
    }
    return accu;
  }, {});

  return Object.keys(uniqueKeys);
}
