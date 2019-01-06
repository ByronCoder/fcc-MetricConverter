/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
   // console.log('input: ' + input);
    let result = input.split(/[a-z]/).filter(a => {return a != ''});
    result = result.join('');

    if(isNaN(parseFloat(result)) || result == null) {
      result = 'invalid';
      return result;
      //console.log(result);
    }
    //console.log('Num: ' + result);
    return eval(result);
  };
  
  this.getUnit = function(input) {
    let result = input.split(/[0-9]/).filter(a => {return a != '' && a != '.' && a != '/'});
    result = result.join('');
    //console.log('Unit: ' + result);
    
    result.match('mi|gal|lbs|L|kg|km') ? result : result = 'invalid';
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit) {
      case 'mi':
        result = "km";
        break;
      case 'gal':
        result = "L";
        break;
      case 'lbs':
        result = "kg";
        break;
      case 'km':
        result = "mi";
        break;
      case 'L':
        result = "gal";
        break;
      case 'kg':
        result = "lbs";
        break;
      default: 
        result = "invalid";
        break;
        
                   
    }
    
    
                   
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit) {
      case 'mi':
        result = "miles";
        break;
      case 'gal':
        result = "gallons";
        break;
      case 'lbs':
        result = "pounds";
        break;
      case 'km':
        result = "kilometers";
        break;
      case 'L':
        result = "liters";
        break;
      case 'kg':
        result = "kilograms";
        break;
      default: 
        result = "invalid";
        break;
        
                   
    }
    
    
    
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
        result = result.toFixed(5);
      break;
      case 'lbs':
        result = initNum * lbsToKg
        result = result.toFixed(5);
      break;
      case 'gal':
        result = initNum * galToL
        result = result.toFixed(5);
      break;
      case 'km':
        result = initNum / miToKm
        result = result.toFixed(5);
      break;
      case 'kg':
        result = initNum / lbsToKg
        result = result.toFixed(5);
      break;
      case 'L':
        result = initNum / galToL
        result = result.toFixed(5);
      break;
      default:
       result = 'invalid'
      
    }
 
    
  
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum +  ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
