let url='www.google.com'

function log(msg)
{
    console.log(msg)
}
module.exports.endpoint=url//making url public
module.exports.printMsg=log//making function public
//or 
//module.exports.myFunc=myFunc//same function name can be given to name of function to trace publicly