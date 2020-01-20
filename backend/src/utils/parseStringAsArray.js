module.exports = function parseStringAsArrya(arrayAsString){
    return arrayAsString.split(',').map(item => item.trim());
}