document.querySelector('#calculateButton').addEventListener('click', (event) => {
    event.preventDefault();
    const num1Input = document.querySelector('input[name="num1"]').value;
    const num2Input = document.querySelector('input[name="num2"]').value;
    const operator = document.querySelector('select[name="operator"]').value;

    const num1 = parseFloat(num1Input);
    const num2 = parseFloat(num2Input);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers!');
        return; 
    }

    const data = {
        "num1": num1,
        "num2": num2,
        "operator": operator
    };

    fetch('http://localhost:8080/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (!response.ok) { 
            return response.json().then(err => {throw new Error(err.error)});
        }
        return response.json();
    }) 
    .then(data => {
        document.querySelector('#result').textContent = data.result;
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error: ' + error.message); 
    });
});
