require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/Employee");

const app = express();
app.use(express.json()); // Middleware for parsing JSON request bodies

// Connect to MongoDB
mongoose.connect(
    process.env.MONGODB_URI, // Use MONGODB_URI from .env file
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch(err => console.error("MongoDB Atlas connection error:", err));

// Define a simple route
app.get("/", (req, res) => {
    res.send("Hey There, Greetings From The Server. Have a Good Day :)");
});

// Get all employees
app.get("/employee", (req, res) => {
    Employee.find({})
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.error('Error fetching employees: ', error);
            res.status(500).json({ error: 'Failed to fetch employees' }); // Send error response
        });
});

// Get tasks
app.get("/task", (req, res) => {
    res.json({ message: "This is the Tasks page" });
});

// Add a new task (employee)
app.post("/task", (req, res) => {
    const { fullName, email, department, city, tasktitle, taskdeadline } = req.body;

    const newEmployee = new Employee({
        fullName,
        email,
        department,
        city,
        tasktitle,
        taskdeadline,
    });

    newEmployee.save()
        .then(() => {
            console.log("Employee details and tasks have been saved");
            res.status(201).json({ message: "Employee created successfully" }); // Send success response
        })
        .catch((error) => {
            console.error('Error saving employee:', error);
            res.status(500).json({ error: 'Failed to save employee' }); // Send error response
        });
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
