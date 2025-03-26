const map = {
    't' : 'tomato',
    'l' : 'lettuce',
    'c' : 'cheese',
    'g' : 'guacamole',
    's' : 'salsa'
   }
   const vowels = 'aeiou'
   
   const tacofy = word => ['shell', ...[...word.toLowerCase()].map(x => vowels.includes(x) ? 'beef' : map[x]).filter(x => x), 'shell']