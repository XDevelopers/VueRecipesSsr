var express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 3001;
let recipes = [{
    id: '1',
    title: 'Chicken Tikka Masala',
    description: 'Super tasty chicken',
    image:
        'https://img.delicious.com.au/tipUVl-4/h506-w759-cfill/del/2015/10/chicken-tikka-masala-skewers-with-coriander-dressing-13113-1.jpg',
},
{
    id: '2',
    title: 'Taco',
    description: 'Super tasty taco',
    image:
        'http://d2gtpjxvvd720b.cloudfront.net/system/recipe/image/992/default_hg-i-hungry-spaghetti-tacos.jpg',
},
{
    id: '3',
    title: 'Chicken Nuggets',
    description: 'Super tasty chicken nuggets',
    image: 'https://5.imimg.com/data5/BE/JR/GLADMIN-40426501/chicken-nuggets-500x500.png',
},
{
    id: '4',
    title: 'Bacon Wrapped Chicken',
    description: 'Super tasty chicken with bacon',
    image:
        'https://www.ditchthecarbs.com/wp-content/uploads/2014/02/rsz_bacon_covered_chicken_nuggets-2.jpg',
},]

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE', 'OPTIONS')
    // Pass to next layer of middleware
    next();
});


app.get('/recipes/.json', (req, res) => {

    res.json(recipes)
})

app.post('/recipes/submit', (req, res) => {
    console.log(recipes.length);
    recipes.push({
        id: `${recipes.length + 1}`,
        title: `${req.body.title}`,
        description: `${req.body.subtitle}`,
        image: `${req.body.picture}`
    })
    res.json(recipes);
})
app.get('/recipes/:id/', function(req, res) {
    recipe = recipes.find((recipe) => {
        return recipe.id === req.params['id'];

    })
    res.json(recipe);
})

app.post('/recipes/:id/delete', (req, res) => {
    recipe = recipes.findIndex((el) => {
        return el.id === req.body.id;
    })
    filtered = recipes.filter((el) => {
        return el.id !== req.body.id
    })
    recipes = filtered;
    res.json(recipes)
})

app.listen(port, () => console.log(`listening on port: ${port}!`));