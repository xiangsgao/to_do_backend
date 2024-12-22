import express, { Request, Response } from "express";
import taskRouter from "./routes/task";
import cors from "cors"
// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

app.use("/tasks", taskRouter);

app.use((_, res) => { 
    res.status(404).send("<h1>Page not found on the server</h1>");
}) 

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
