import express from 'express';
import mongoose from 'mongoose';

//Connecting to mongo database
mongoose.connect('mongodb://localhost:27017/employeeManagement').then(() => { console.log('Database connected') }).catch((err) => { console.log('Error in connecting database', port) });


//Schema for cerating database -- 

const Schema = mongoose.Schema;




const userSchema = new Schema({
    saluatation: String,
    firstName: String,
    lastName: String,
    email: { type: String },
    phone: { type: String, },
    gender: { type: String, },
    qualification: { type: String },
    adress: String,
    city: String,
    state: String,
    Country: String,
    userName: String,
    password: String
});

//Model Creation using schema
const Employee = mongoose.model('Employee', userSchema, 'employeeDetails');

///Express prot defenition
const port = 5000;
const app = express();

//Middle aware to parse the body fron the request

app.use(express.json());



///Function that act as controller

async function getAllUser() {
    try {
        let allUsers = await Employee.find({});
        return allUsers;
    }
    catch (err) {
        console.error(err)
    }

};


async function createUser(userData) {
    try {
        let data = userData;

        let result = await Employee.insertMany(data);
        return result;
    }
    catch (err) {
        console.log('error occured', err);
    }

};

async function deleteUser(id) {
    try {
        let userId = id;
        let result = await Employee.findByIdAndDelete({ _id: userId });
        return result;
    }
    catch (err) {
        console.log(err);
    }

};

async function getUserById(id) {
    try {
        let userId = id;
        let userData = await Employee.find({ _id: userId });
        return userData;
    }
    catch (err) {
        console.log(err);
    }
};

async function updateUser(id, data) {
    try {
        let userId = id;
        let userData = data;
        let result = await Employee.findByIdAndUpdate(userId, userData, { new: true, runValidators: true });
        return result;
    }
    catch (err) {
        console.log(err);
    }

};

//Routers to deal with the CRUD
app.get('/', async (req, res) => {
    let users = await getAllUser();
    res.send(users);
});

app.get('/:id', async (req, res) => {
    let userid = req.params.id;
    let data = await getUserById(userid);
    res.send(data);
});


app.post('/', async (req, res) => {
    try {
        let data = req.body;
        let result = await createUser(data);

        res.send({ message: "Employee Created Sucessdully", id: result[0]._id });
    }
    catch (error) {
        res.send('Error', error)

    }
});


app.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await deleteUser(id);
    res.send("user Deleted sucessfully");
});

app.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    console.log(id, data);

    let result = await updateUser(id, data);
    console.log(result);
    res.send("User Updated sucessfullly");

});


app.listen(port, () => {
    console.log('Port is running on port', port);
});