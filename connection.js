import mongoose from "mongoose";


async function databaseConnection()
{
    try{
        await mongoose.connect('mongodb://localhost:27017/employeeManagement');
        console.log("DataBase connected Sucessfully");
    }
    catch(error)
    {
        console.error("There is some error in databse connection", error);
    }
};


export {databaseConnection} ;