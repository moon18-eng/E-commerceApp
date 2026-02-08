    import  express from 'express';
    import helmet from 'helmet';
    import morgan from 'morgan';
    import cors from 'cors';
    import dotenv from 'dotenv';
    import productRoute from './routes/productRoute.js';

    dotenv.config();
    const app = express();
    const PORT = process.env.PORT;

    app.use(express.json()); //middleware to parse incoming JSON requests and put the parsed data in req.body
    app.use(cors()); //middleware to enable Cross-Origin Resource Sharing (CORS) in your Express app, allowing it to handle requests from different origins
    app.use(helmet()); //security middleware that helps protect your app by setting various HTTP headers
    app.use(morgan('dev')); //HTTP request logger middleware for node.js


    app.use("/api/products", productRoute);
    app.get("/", (req, res) => {
        res.send("Welcome to the E-commerce API");
    });
 








    app.listen(PORT, () => {
        console.log('Server is running on port ' + PORT);
    });