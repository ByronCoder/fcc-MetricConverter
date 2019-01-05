/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.split(/[a-z]/).filter(a => {return a != ''});
    result = parseFloat(result.join(''));
    console.log('Num: ' + result);
    return result;
  };
  
  this.getUnit = function(input) {
    let result = input.split(/[0-9]/).filter(a => {return a != '' && a != '.'});
    result = result.join('');
    console.log('Unit: ' + result);
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit) {
      case 'mi':
        result = initNum * miToKm
      break;
      default:
        'invalid unit'
      
    }
 
    
  
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
