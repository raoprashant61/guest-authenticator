
//To use mongoDB Atlas

/*let mongoose = require('mongoose');

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://mohit:mohitsrt@cluster0.lm5qs.mongodb.net/data0?retryWrites=true&w=majority',{ useMongoClient: true });

const uri = "mongodb+srv://username:password@prcluster0.yu9ol.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true}).
then(()=>console.log('Mongo DB Connected')).
catch(err=>console.log(err));


module.exports = {mongoose};*/


//To use local MongoDB
let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/',{  });

module.exports = {mongoose};