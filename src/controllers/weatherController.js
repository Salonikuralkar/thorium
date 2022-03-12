let axios = require("axios")
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Assignment Question
//get weather of London by q and appid in query params
let getWeatherOfLondon = async function (req, res) {
    try {
        let city = req.query.q
        let appId = req.query.appid
        // console.log(`query params are: ${id} ${date}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`
        }
        let result = await axios(options)
        // console.log(result.data.weather)
        res.status(200).send({ "London": result.data.main.temp })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Sort the cities according to temperature
let getWeatherOfAllCities = async function (req, res) {

        try {
            const array = []
            let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
            
                for(let i=0; i<cities.length; i++){
                    let options = {
                        method: 'get',
                        url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=088f08d101eecf972b3b263dfc8c7a7a`
                    }
                let result = await axios(options);
                let data = result.data.main.temp
                let obj = { city:`${cities[i]}`, temp: data}
                array.push(obj)
                array.sort((a,b)=> a.temp-b.temp)
                }
            
            res.status(200).send({array})
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }

module.exports.getWeatherOfLondon = getWeatherOfLondon


module.exports.getWeatherOfAllCities = getWeatherOfAllCities

// 











// let endpoints = [
//     `http://api.openweathermap.org/data/2.5/weather?q=London&appid=088f08d101eecf972b3b263dfc8c7a7a`,
//     `http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=088f08d101eecf972b3b263dfc8c7a7a`,
//     `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=088f08d101eecf972b3b263dfc8c7a7a`,
//     `http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=088f08d101eecf972b3b263dfc8c7a7a`,
//     'http://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=088f08d101eecf972b3b263dfc8c7a7a',
//     `http://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=088f08d101eecf972b3b263dfc8c7a7a`,
//     `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=088f08d101eecf972b3b263dfc8c7a7a`
//   ];
//   let array=[];
//  await axios.all(endpoints.map((endpoint) =>  axios.get(endpoint))).then(
//     axios.spread((London, Bengaluru, Mumbai, Delhi, Kolkata ,Chennai  ,Moscow) => {
//        // console.log({ London, Bengaluru, Mumbai, Delhi, Kolkata ,Chennai  ,Moscow});
//      [London, Bengaluru, Mumbai, Delhi, Kolkata ,Chennai  ,Moscow]
//     })


// let getWeatherOfAllCities = async function (req, res) {
//     //let places=[London,Mumbai,Delhi,Bangalore]
//     try {
        
//         var london = {
//             method: "get",
//             url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=088f08d101eecf972b3b263dfc8c7a7a`
//         }
//         let result1 = await axios(london)
// ///////////////////////////////////////////////////////////////////////////////////////

//          var bengaluru = {
//             method: "get",
//             url:  `http://api.openweathermap.org/data/2.5/weather?q=Bengaluru&appid=088f08d101eecf972b3b263dfc8c7a7a`
//         }
//         let result2 = await axios(bengaluru)
// //////////////////////////////////////////////////////////////////////////////////////////////

//         var mumbai = {
//             method: "get",
//             url:  `http://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=088f08d101eecf972b3b263dfc8c7a7a`
//         }
//         let result3 = await axios(mumbai)
// /////////////////////////////////////////////////////////////////////////////////////////////////////////

//         var delhi = {
//             method: "get",
//             url:  `http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=088f08d101eecf972b3b263dfc8c7a7a`
//         }
//         let result4 = await axios(delhi)
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
//         var kolkata = {
//             method: "get",
//             url:  'http://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=088f08d101eecf972b3b263dfc8c7a7a'
//         }
//         let result5 = await axios(kolkata)
//  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
       
 
//  var chennai = {
//     method: "get",
//     url:  `http://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=088f08d101eecf972b3b263dfc8c7a7a`
// }
// let result6 = await axios(chennai)
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// var moscow = {
//     method: "get",
//     url:  `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=088f08d101eecf972b3b263dfc8c7a7a`
// }
// let result7 = await axios(moscow)
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    
// let array=[{ "city":"London","temp":result1.data.main.temp}, {"city":"Bengaluru","temp":result2.data.main.temp}, {"city":"Mumbai","temp":result3.data.main.temp},
// {"city":"Delhi","temp":result4.data.main.temp},{"city":"Kolkata","temp":result5.data.main.temp},{"city":"Chennai","temp":result6.data.main.temp},{"city":"Moscow","temp":result7.data.main.temp }]
// let temperature= array.sort((a,b)=>a.temp-b.temp);
// res.status(200).send (temperature)       
// }
        
    
//     catch (err) {
//         console.log(err)
//         res.status(500).send({ msg: err.message })
//     }
// }
