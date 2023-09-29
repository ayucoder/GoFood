const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/gofood';


const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected successfully to MongoDB');

    const fetchedData = await mongoose.connection.db.collection("fooditems");
    const fetchedFoodCategory = await mongoose.connection.db.collection("foodcategory");

    const data = await fetchedData.find({}).toArray()
    const foodCategory = await fetchedFoodCategory.find({}).toArray()

    global.fooditems = data;
    global.foodCategory=foodCategory;

    // fetchedData.find({}).toArray(async function (err, data) {
    //   const foodCategory = await mongoose.connection.db.collection("foodCategory");
    //   foodCategory.find({}).toArray(function (err, data) {

    //     console.log('data', data)

    //     if (err) {
    //       console.error('Error in find callback:', err);
    //     } else {

    //       global.fooditems = data;
    //       global.foodCategory=catData;

    //     }
    //   })
    //   // if (err) {
    //   //   console.error('Error in find callback:', err);
    //   // } else {

    //   //   global.fooditems=data;
    //   //   console.log(global.fooditems);
    //   // }


    // });

  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = connectToMongoDB;
