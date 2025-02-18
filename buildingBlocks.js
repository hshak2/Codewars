// class Block{

//   constructor(data){
//   this.data = data
//     let width, length, height
//     data = [width, length, height]
    
    
//     // ...
//   }
//   getWidth(){
//       return this.width
//     }
//     getLength(){
//       return this.length
//     }
//     getHeight(){
//       return this.height
//     }
//     getVolume(){
//       return this.length * this.width * this.height
//     }
//     getSurfaceArea(){
//       return this.length * this.height
//     }
//   // ...
  
// }
class Block {
    constructor(data){
      [this.w, this.l, this.h] = data;
    }
    getWidth(){ return this.w }
    getLength(){ return this.l }
    getHeight(){ return this.h }
    getVolume(){
      let {l, w, h} = this;
      return w*l*h;
    }
    getSurfaceArea(){
      let {l, w, h} = this;
      return 2 * (l*w + l*h + w*h);
    }
  }