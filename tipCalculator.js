function calculateTip(amount, rating) {
    if(rating.toLowerCase() === 'excellent'){
      return Math.ceil(amount * 20 /100)
    }else if(rating.toLowerCase() === 'great'){
      return Math.ceil(amount * 15 /100)
    }else if(rating.toLowerCase() === 'good'){
      return Math.ceil(amount * 10 /100)
    }else if(rating.toLowerCase() === 'poor'){
      return Math.ceil(amount * 5/100)
    }else if(rating.toLowerCase() === 'terrible'){
      return amount * 0/100
    }else{
      return 'Rating not recognised'
    }
    }