const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = 8080;

app.use(express.json()); 
app.use(cors());
app.post('/calculate', (req, res) => {
    const { num1, num2, operator } = req.body;
    let result;

    switch (operator) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                return res.status(400).json({ error: 'Cannot divide by zero' });
            }
            result = num1 / num2;
            break;
        default:
            return res.status(400).json({ error: 'Invalid operator' });
    }

    res.json({ result });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
