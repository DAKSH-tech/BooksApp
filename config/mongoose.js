const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/booksApp', 
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to Database!'); 
});
module.exports=db;