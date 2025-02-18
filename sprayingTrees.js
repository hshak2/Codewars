function task(w, t, c) {
    let z = Number(t * c)
    if(w === 'Monday'){
      return `It is ${w} today, James, you have to work, you must spray ${t} trees and you need ${z} dollars to buy liquid`
    }else if(w === 'Tuesday'){
          return `It is ${w} today, John, you have to work, you must spray ${t} trees and you need ${z} dollars to buy liquid`
    }else if(w === 'Wednesday'){
        return `It is ${w} today, Robert, you have to work, you must spray ${t} trees and you need ${z} dollars to buy liquid`
    }else if(w === 'Thursday'){
       return `It is ${w} today, Michael, you have to work, you must spray ${t} trees and you need ${z} dollars to buy liquid`
    }else if(w === 'Friday'){
      return `It is ${w} today, William, you have to work, you must spray ${t} trees and you need ${z} dollars to buy liquid`
    }  
  
  }