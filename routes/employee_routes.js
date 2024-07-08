import express from 'express';
import {handleGetAllUsers , handleCreateUser ,handleGetUserById ,handleDeleteUser ,handleUpdateUser} from '../controllers/employee_controllers.js';

const router = express.Router();


router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router.route("/:id").get(handleGetUserById).put(handleUpdateUser).delete(handleDeleteUser);




export default router;