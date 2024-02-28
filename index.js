const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to render the form
app.get('/', (req, res) => {
    res.render('form');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    // Write form data to a file (for demonstration purposes)
    const formData = req.body;
    // Here you can save formData to a file using fs module
    name=req.body.name;
    email=req.body.email;
    message=req.body.message;
    let output=`the name of client is ${name} and email is ${email} and the msg is ${message}`;
    fs.writeFileSync('output.text',output)

    // Respond with a success message
    res.send('Form data received and saved successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
