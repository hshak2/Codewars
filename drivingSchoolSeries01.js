function passed (list) { 

    //Good luck!
    const otherList = list.filter(element => element <= 18)
    if(otherList.length !== 0){
      return Math.round(otherList.reduce((acc, c) => acc + c, 0) / otherList.length)
    }else{
      return 'No pass scores registered.'
    }
    
    } 