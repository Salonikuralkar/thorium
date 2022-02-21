function stringTrim(str)
{
   return str.trim()
}
function lCase(str)
{
   // let stringCase='funCTIionUp'
   // return(stringCase.toLowerCase())
    return str.toLowerCase()
}
function uCase(str)
{
    //let stringCase='functionUp'
    //return(stringCase.toUpperCase())
   return str.toUpperCase()
}

module.exports.trim=stringTrim
module.exports.lowercase =lCase
module.exports.uppercase =uCase