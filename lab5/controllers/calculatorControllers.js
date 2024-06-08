const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2
    console.log(sum)
    res.status(200)
    res.json({result:sum})
}   

const subNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sub = number1 - number2;
    console.log(sub)
    res.status(200)
    res.json({result:sub})
}

const multNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let times = number1 * number2;
    console.log(times)
    res.status(200)
    res.json({result:times})
}

const divNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);

    let quo = number1 / number2;
    console.log(quo)
    res.status(200)
    res.json({result:quo})
}

module.exports = {
    addNumbers,
    divNumbers,
    multNumbers,
    subNumbers
}