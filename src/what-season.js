module.exports = function getSeason(date ) {

  if(!date ) { return 'Unable to determine the time of year!'};
  if(typeof date !== 'object' || !(date instanceof Date)){ throw (Error) };
  const years = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const mounth = years.find(el => date.toDateString().includes(el))
 switch(mounth) {
  case 'Dec':
  case 'Jan':
  case 'Feb':
    return 'winter';
    break;
  case 'Mar':
  case 'Apr':
  case 'May':
    return 'spring';
    break;
  case 'Jun':
  case 'Jul':
  case 'Aug':
    return 'summer';
    break;
  case 'Sep':
  case 'Oct':
  case 'Nov':
    return 'autumn';
    break;
 }
  
};
