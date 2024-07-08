/* 
* define connection.js -- for database connection --DONE
* services -- write the databse queries -- here we import models -DONE
* controller folder ---write function --DONE
* model folder -- write scheme and model --DONE
* view --folder for the ejs template engine
* handle the error using try catch block. --done --created an custom error to handle the error
*/

import express from 'express';
import { databaseConnection } from './connection.js';
import { customErrorHandler } from './middleware/custom_error.js';
import router from './routes/employee_routes.js';

 const app = express();
 const port = 5000;

app.use(express.json());

app.use(customErrorHandler);

await databaseConnection();

app.use('/' , router);


app.listen(port , ()=> 
{
    console.log("App is running on port" ,port);
});