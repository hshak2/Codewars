let getQuote = function(quotes, hero){
  let nums = hero.split('').map(e => parseInt(e)).filter(e => Number(e)).join('')
//   let heroic = ['Batman', 'Robin', 'Joker']
//   let heroArr = heroic.map(e => e.slice(0, 1))
//   let heroStr = hero.slice(0, 1)
//   for(let i = 0; i<= heroic.length - 1; i++){
//     if(heroStr === heroic[i].map(e => e.slice(0, 1))){
//       return `${heroic[i]}: ${quotes[Number(nums)]}`
//     }
//   }
//   heroic.map((e, i) => {
//     heroStr === heroic[i].slice(0, 1) ? heroic[i] 
//   }) 
let rightHero = hero
  
  if (hero[0] === 'R') rightHero = 'Robin'
  if (hero[0] === 'B') rightHero = 'Batman'
  if (hero[0] === 'J') rightHero = 'Joker'
  
  return `${rightHero}: ${quotes[Number(nums)]}`
  
//   return `${heroic[Number(nums)]}: ${quotes[Number(nums)]}`
}
