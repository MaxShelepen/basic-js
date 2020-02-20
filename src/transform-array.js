module.exports = function transform(arr) {
    if(!Array.isArray(arr)) { throw (Error) };
    const result = [];
    const prev = ['--discard-prev', '--double-prev'];
    const next = ['--discard-next', '--double-next'];
    arr.forEach((el, idx)=> {
        if(!prev.includes(el) && !next.includes(el) ) {
            result.push(el);
        };

        if((prev.includes(el) && idx !== 0)){
            if(el === '--discard-prev') {
                result.pop();
            } else if(el === '--double-prev'){
                result.push(arr[idx-1]);
            }

        }
        
        if(next.includes(arr[idx-1])) {
            if(arr[idx-1] === '--discard-next') {
                result.pop();
            } else if(arr[idx-1] === '--double-next'){
                result.push(result[result.length-1]);
            }
        }
    });
   
    return result;
};