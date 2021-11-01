const express = require("express");
const app = express();


app.use(express.json());

app.use(express.urlencoded({
     extended: true
}));

app.all("*", function (req, res, next) {
   console.log("Dostałem jakieś żądanie"); // zareaguje na każde żądanie
   next();
});

app.post("/osoba",(req,res) => {
    //zwracamy odpowiedź na żądanie
    let nazwisko = req.body.nazwisko;
    let imie = req.body.imie;
    //res.write(JSON.stringify(req.body));
    res.write("Nazwisko: " + nazwisko +"  Imię: "+ imie);    
    res.end("Za pomoca metody POST wywolales zadanie osoba");
    //wypisujemy informację w konsoli webserwisu
    console.log("Nazwisko: " + nazwisko + "  Imię: " + imie);
    console.log("Za pomoca metody POST wywolales zadanie osoba");
});

app.listen(8080, () => {
    console.log('Server is running at port 8080');
});