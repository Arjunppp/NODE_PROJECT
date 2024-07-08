import { employee } from "../models/employee_model.js";





async function getAllEmployee(next) {
    try {
        let userData = await employee.find({});
        return userData;

    }
    catch (err) {

        next(err);
    }
};


async function getUserById(id ,next) {
    try {
        let userId = id;
        let userData = await employee.find({ _id: userId });
        return userData;
    }
    catch (err) {
        next(err);
    }

};

async function createUser(data ,next) {
    try {
        let userData = data;
        let result = await employee.insertMany(userData);
        return result;
    }
    catch (err) {
       next(err);
    }

};

async function deleteUser(id ,next) {
    try {

        let userId = id;
        let result = await employee.findByIdAndDelete({ _id: userId });
        
        return result;
    }
    catch (err) {
       next(err);
    }

};

async function updateUser(id , data ,next)
{
  try{
    let userId = id;
    let userData = data;
    let result = await employee.findByIdAndUpdate(userId, userData, { new: true, runValidators: true });
    return result;
  }
  catch(err)
  {
    next(err);
  }
};


export { getAllEmployee, getUserById, createUser, deleteUser ,updateUser };