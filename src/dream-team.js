module.exports = function createDreamTeam( members ) {
  
  let result= [];
  let res = [];
  
  if (typeof members === 'boolean' || typeof members === 'numbers' || !!undefined || !Array.isArray(members) ) {
    return false;
        }

   members.map((el, index, array) => { if( typeof(el) === 'string') {
    result.push(el) 
   } else { 
     null} 
  });

   result.map(el => res.push(el.replace(/\s/g, '')));
  
  return res.join(' ').toUpperCase().split('').filter((el, index, array) => {
      if ( index === 0 || array[index - 1] === ' '){
          return true;
          } else { return false}
      }).sort((a,b) => a > b ? 1 : -1 ).join('');
  
  };