function calculate(str) {
    let arr=str.split('plus');
    let sum=0;
    for (let i=0; i<arr.length; ++i)
      if (arr[i].indexOf('minus')==-1)
        sum+=+arr[i];
      else
      {
        let ar=arr[i].split('minus');
        let s=+ar[0];
        for (let j=1; j<ar.length; ++j)
          s-=ar[j];
        sum+=s;
      }
    return sum.toString();
  }