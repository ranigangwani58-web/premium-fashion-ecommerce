
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const Register = require("./Register");

const app = express();

app.use(cors());

// Allow Express to receive JSON from React
app.use(express.json());


// MongoDB Connection
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected Successfully ✅");

        // Show which database is connected
        console.log("Database:", mongoose.connection.name);

    } catch (error) {

        console.log("MongoDB Connection Failed ❌");
        console.log(error);

    }

};

connectDB();


// REGISTER API
app.post("/api/register", async (req, res) => {

    try {

        // Show data received from Register.jsx
        console.log("DATA RECEIVED:", req.body);


        // Get data from React
        const { name, email, password } = req.body;


        // Create new user
        const newUser = new Register({

            name,
            email,
            password

        });


        // Save user to MongoDB
        const savedUser = await newUser.save();


        // Show saved data in terminal
        console.log("USER SAVED TO MONGODB ✅");
        console.log(savedUser);


        // Send success response to React
        res.status(201).json({

            message: "Account created successfully!"

        });

    } catch (error) {

        console.log("REGISTRATION ERROR ❌");
        console.log(error);


        res.status(500).json({

            message: "Registration failed"

        });

    }

});


// Start server
app.listen(5001, () => {

    console.log("Server running on port 5001");

});
