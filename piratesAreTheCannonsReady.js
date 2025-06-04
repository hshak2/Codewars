const cannonsReady = (gunners) => {

    for(const property in gunners){
      if(gunners[property] === 'nay'){
        return 'Shiver me timbers!'
      }
    }
    return 'Fire!'
  }