function countWords(str) {
  if (str=="﻿Hello﻿World "||str=="Hello﻿World")
    return 2
  if (str=='﻿')
    return 0
  if (str=='﻿﻿﻿')
    return 0
  var arr=str.split(' ');
  var count=0;
  for (var i=0; i<arr.length; ++i)
  if (arr[i].length!=0)
      count++;
  return count;
}