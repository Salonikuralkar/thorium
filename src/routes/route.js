const express = require('express');
const router = express.Router();

let playersArr = [
    {

        "name": "manish",

        "dob": "1/1/1995",

        "gender": "male",

        "city": "jalandhar",

        "sports": ["swimming"],

        "bookings": [
            {

                "bookingId":" 1",

                "sportId": " ",

                "centerId": " ",

                "type": "private",

                "slot": "16286598000000",

                "bookedOn": "31 / 08 / 2021",

                "bookedFor": "01 / 09 / 2021"

            },

            {

                "bookingId": "2",

                "sportId": " ",

                "centerId": " ",

                "type": "private",

                "slot": "16286518000000",

                "bookedOn": "31 / 08 / 2001",

                "bookedFor": "01 / 09 / 2001",

            }
        ]
    },

    {

        "name": "gopal",

        "dob": "1/09/1995",

        "gender": "male",

        "city": "delhi",

        "sports": [

            "soccer"

        ],

        "bookings": []

    },

    {

        "name": "lokesh",

        "dob": "1/1/1990",

        "gender": "male",

        "city": "mumbai",

        "sports": [

            "soccer"

        ],

        "bookings": []

    },

]
router.post('/players', function (req, res) {
    let newEle = {}
    newEle = req.body.newPlayer/////////taking input to add new element in array from user
    for (let i = 0; i < playersArr.length; i++) {
        if (newEle.name === playersArr[i].name) {
            res.send("already exists")
        }
    }
    playersArr.push(newEle)

    //console.log(req.body)
    res.send({ msg: playersArr })///json format

})

router.post('/players/:playerName/bookings/:bookingId', function (req, res) {
    let pname = req.params.playerName;
    let bookingIdPlayers = req.params.bookingId;
    let userGivenBooking = req.body.element;
    for (let k = 0; k < playersArr.length; k++) {
        if (pname === playersArr[k].name) {
            let newArr = playersArr[k].bookings;

            if (newArr === []) {
              //  playersArr.bookings.push(userGivenBooking)
                newArr.push(userGivenBooking)
                res.send({ msg: playersArr })
            }
            else {
                for (let j = 0; j < newArr.length; j++) {
                    if (newArr[j].bookingId === bookingIdPlayers) {
                        res.send("booking is already done")
                    }

                }
                newArr.push(userGivenBooking)
                     res.send({ msg: playersArr }) 
            }

        }

    } res.send("player doesn't exist")


})
//    let playerN=[]
//    let bookP=[]
//    playerN= playersArr.forEach((ele)=> ele.name )
//    bookP=playersArr.forEach((ele)=> ele.bookings )
//    for (let i = 0; i < playerN.length; i++) 
//    {
//         if(pname === playerN[i]) 
//          {
//                      for (let j = 0; j< bookP.length; j++) 
//                          {

//                           if(bookP[j]=== 0)
//                              {
//                                 playersArr.bookings.push(bookingIdPlayers)
//                                 res.send({ msg: playersArr })
//                              }
//                           else
//                              {
//                                   res.send("booking is already done")

//                              }

//                            }
//          }
//          else
//          {
//             res.send("player doesn't exist")
//          }
// }



module.exports = router;

















// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })
