// backend/server.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose"); // Import Mongoose

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

//Connect to MongoDB
// mongoose.connect("mongodb://0.0.0.0:27017/yogaClass", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// i could have kept it in env File but i have made it public to check my db if you want
mongoose.connect(
  "mongodb+srv://mayank:fzb1nRf2AU0BegcK@cluster0.k7wb0nr.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Define MongoDB schema and model using Mongoose
const participantSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  batch: String,
});

const Participant = mongoose.model("Participant", participantSchema);

// POST Request to save the User
app.post("/submit-form", async (req, res) => {
  try {
    const { name, age, email, batch } = req.body;

    // Basic validation
    if (!name || !age || !email || !batch) {
      return res.status(400).json({ error: "Please fill in all fields." });
    }

    // Store data in the MongoDB database
    const participant = new Participant({ name, age, email, batch });
    await participant.save();

    // Assume CompletePayment() is a mock function for payment processing
    const paymentResponse = CompletePayment(participant);

    // Return the response to the front-end
    res.status(200).json({ success: true, paymentResponse });
  } catch (error) {
    console.error("Form submission error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API to modify the User to Change the Batch
app.put("/search", async (req, res) => {
  let { email, batch } = req.body;
  console.log(email, batch);
  let user = await Participant.findOne({ email: email });
  console.log(user);
  if (user.batch === batch) {
    res.status(200).json({
      message: "Oops !! you entered same batch !!",
    });
  }

  user.batch = batch;
  await user.save();
  res.status(200).json({
    message: "Batch is updated !!",
    data: user,
  });
});

//server on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Mock function for payment processing
function CompletePayment(user) {
  // Your payment processing logic here (this is a mock function)
  return { status: "success", message: "Payment completed successfully." };
}
