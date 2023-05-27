function intersecArrays(arr1, arr2) {
    let intersection = [],
      loopingArray = [],
      smallArr = [];
    if (arr1.length > arr2.length) {
      loopingArray = arr1;
      smallArr = arr2;
    }
    loopingArray = arr2;
    smallArr = arr1;
    for (let i = 0; i < loopingArray.length; i++) {
      if (smallArr.includes(loopingArray[i])) {
        intersection.push(loopingArray[i]);
      }
    }
    console.log(intersection);
  }
	let arr1 = [1, 2, 3, 6, 8];
  let arr2 = [2, 3, 4, 7, 8, 9,1,3];
  intersecArrays(arr1, arr2);