const express = require('express');
const router = express.Router();

let  movieArr=['The Shining','Incendies','Rang de Basanti','Finding Nemo']
router.get('/movies', function (req, res) {
    res.send(movieArr)
});/////////////////////////1st

router.get('/movies/:indexNumber', function(req, res) {
    let index = req.params.indexNumber;
    if(index>movieArr.length-1)
    {
        res.send("Not a valid index");
    }
    else
    {
        res.send(movieArr[index]);
    }
});///////////////////////////2nd & 3rd
///////////////////////////////////////////////////////////////////////////////////////
let obj=[       {
    id: '1',
   name: 'The Shining'
    }, 
    {
   id: '2',
   name: 'Incendies'
   }, {
   id: '3',
   name: 'Rang de Basanti'
   },
   {
       id: '4',
       name: 'Finding Nemo'
    }
]   
router.get('/films', function (req, res) {
res.send(obj)
});///////////////4th

router.get('/films/:filmId', function(req, res) {
    let index = req.params.filmId;
    if(index>obj.length-1)
    {
        res.send("No movie exists with this id");           
    }
    else
    {
        res.send(obj[index-1]);
    }
});////////////////5th



// router.get('/test-me', function (req, res) {
//         res.send('My first ever api!')
//     });
//     router.get('/films', function (req, res) {
        
//         res.send('My first ever api!')
//     });
// router.get('/movies/:indexNumber ', function (req, res) {
//     let movieArr=['The_Shining','Incendies','Rang_de_Basanti','Finding_Nemo']
//     for(let i=0;i<movieArr.length;i++)
//     {
//         if((movieArr[i]===req.params.indexNumber)&&(i>0&&i<=movieArr.length))
//         {
//             res.send(movieArr[i])  
//         }
//         else{
//             res.send("not valid index")
//         }
//     }



module.exports = router;
