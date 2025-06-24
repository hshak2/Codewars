function DNAStrand(dna){
    let table = {
      C : 'G',
      G : 'C',
      A : 'T',
      T : 'A'
    };
      
    return dna.split('').map(function(cv) {
      return table[cv]; 
    }).join('');
  }