function capitalsFirst(str){
  let words = str.split(" ");
  let leftArr = [], rightArr = [];
  
  for(let word of words) {
		console.log(word);
		if( (word[0] === word[0].toUpperCase()) 
	    && (word[0].toUpperCase() !== word[0].toLowerCase()) )
	                                                    leftArr.push(word);
		if( (word[0] === word[0].toLowerCase())
	    && (word[0].toUpperCase() !== word[0].toLowerCase()) )
	                                                    rightArr.push(word);
  }

  return [...leftArr, ...rightArr].join(' ');
}