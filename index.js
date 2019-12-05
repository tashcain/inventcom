const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Cors = require('cors');


//mongoose connnection
mongoose.connect('mongodb+srv://shubh:shubh2015@cluster0-l10ee.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })


const app = express();
app.use(Cors());

const Addcon = require('./models/Addcont');
const Dest = require('./models/dest');
const Items = require('./models/itemmod');
const Test = require('./models/test');
const Stock = require('./models/stock');
const Draft = require('./models/draft');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("hello");
})


    app.get('/save-data',(req,res)=>{
      res.send('save-data',200)
    })

    app.post('/item-data',(req, res, next) => {
      const item = new Items({
        name:req.body.name,
        age:req.body.age
      })
      item.save()
      .then(result => {
        res.status(200).json({
          message:"aggaye",
          createdItem: result
        })
      })
      .catch(err => console.log(err))
    })

    app.get('/order/:id',function(req,res){
      // let simage=req.params.id
      Test.findById({_id:req.params.id},function(err, abcd){
        if(err){
          console.log(err);
        }else{
          console.log(abcd);
         res.send(abcd)
      }
      })
      });

      app.get('/req/:id',function(req,res){
        // let simage=req.params.id
        Stock.findById({_id:req.params.id},function(err, abcd){
          if(err){
            console.log(err);
          }else{
            console.log(abcd);
           res.send(abcd)
        }
        })
        });

      app.get('/updatetoone/:id',(req,res) => {
         Test.update({_id: req.params.id}, {$set:{status: 1}}, err => {
           if(err) {
             console.log(err);
             res.status(400).send('error occured !!!')
           } else {
             res.status(201).send('status updated')
            
           }
         })
      })
      app.get('/updatetotwo/:id',(req,res) => {
        console.log('status to 2');
        Test.update({_id: req.params.id}, {$set:{status: 2}}, err => {
          if(err) {
            console.log(err);
            res.status(400).send('error occured !!!')
          } else {
            res.status(201).send('status updated')
           
          }
        })
     })

     app.get('/updateStock/:id',(req,res) => {
      Stock.update({ "_id": req.params.id },
      { "$inc": { "quantity": -1 } }, function (err, doc) {
          if (err) {console.log(err);
          } else {
              console.log("stock updated");
          }
  });     
     })

     app.post('/stock', (req, res) => {
      const stock = new Stock({
        comId:req.body.comId,
        comName:req.body.comName,
       prodName:req.body.prodName,
          Color:req.body.Color,
       Category:req.body.Category,
         Gender:req.body.Gender,
           Size:req.body.Size,
       location:req.body.location
        
      })
        stock.save()
        .then(result => {
          res.send("hogya save");
          console.log(result)
        })
        .catch(err => {
          res.send(err)
        })
    })

    app.get('/stock', (req, res)=> {
      Stock.find({}, (err, some) => {
        if(err) {
          console.log(err);
        }
        else{
          res.send(some);
          
        }
      })
    })

    app.get('/stocksta/:id',(req,res) => {
      Stock.update({_id: req.params.id}, {$set:{status: 1}}, err => {
        if(err) {
          console.log(err);
          res.status(400).send('error occured !!!')
        } else {
          res.status(201).send('status updated')
         //  req.flash("success");
         //  res.redirect("/")
        }
      })
   })
    
    

  


      app.listen(5000, () => {
          console.log("server started in port 5000");
      })