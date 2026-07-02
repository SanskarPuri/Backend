const mongoose = require("mongoose");
const sampleCourse = require("./sampledata");
const Course = require("./init");
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/course');
        console.log("Connection successful...");
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }

}

async function addDB() {
    try {
        let data = await Course.deleteMany({});
        let addData = await Course.insertMany(sampleCourse);
    }catch(err){
        console.log(err.message);
    }finally{
        await mongoose.disconnect();
    }
    
}

async function init() {
    await connectDB();
    await addDB();
}
init();