module.exports = class DepthCalculator {
   
    calculateDepth(arr) {
        let sum = 1;
        let max = 1;
          arr.forEach(element => {
           if (Array.isArray(element)) {
       sum = this.calculateDepth(element) + 1;
        if(sum > max) {max = sum}
           }
          });
         
         return max;
    }
};