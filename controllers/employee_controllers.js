
import { CustomError } from "../middleware/custom_error.js";
import { getAllEmployee, getUserById, createUser, deleteUser, updateUser } from "../services/employee_service.js";


async function handleGetAllUsers(req, res, next) {
    try {
        let allUsers = await getAllEmployee();
        if (allUsers.length == 0) {
            throw new CustomError(404, ' User List is Empty')
        }
        else {
            res.status(200).send(allUsers);
        }

    }
    catch (err) {
        next(err);
    }

};

async function handleGetUserById(req, res, next) {
    try {
        let userId = req.params.id;
        let result = await getUserById(userId);
        if (result.length == 0) {
            throw new CustomError(404, 'User Not found');
        }
        else {
            res.status(200).send(result);
        }
    }
    catch (err) {
        next(err);
    }

};

async function handleCreateUser(req, res, next) {
    try {
        let userData = req.body;
        let result = await createUser(userData);
        res.status(200).send({ message: "Employee Created Sucessdully", id: result[0]._id });
    }
    catch (err) {
        next(err)
    }
};

async function handleDeleteUser(req, res, next) {
    try {
        let userId = req.params.id;
        let result = await deleteUser(userId);
        if (!result) {
            throw new CustomError(404, 'User Not found');
        }
        else {
            res.send("user Deleted sucessfully");

        }

    }
    catch (err) {
        next(err);
    }
};


async function handleUpdateUser(req, res, next) {
    try {
        let userId = req.params.id;
        let userData = req.body;
        let result = await updateUser(userId, userData);
        if (!result) {
            throw new CustomError(404, 'User Not found');
        }
        else {
            res.send("User Updated sucessfullly");

        }

    }
    catch (err) {
        next(err);
    }
}




export { handleGetAllUsers, handleGetUserById, handleCreateUser, handleDeleteUser, handleUpdateUser }