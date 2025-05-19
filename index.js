const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

// change port if needed
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// change supabaseURL and supabaseKey to your own Supabase URL and Key in the .env file
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/getfruitdb', async (req, res) => {
    console.log('Attempting to GET fruit_table');

    const { data, error } = await supabase.from('fruit_table').select();
    if (error) {
        console.log('Error');
        res.send(error);
    } else {
        res.send(data);
    }
});

app.post('/fruit', async (req, res) => {
    console.log('adding fruit');
  
    console.log(req.body);
    var name = req.body.name;
    var family = req.body.family;
    var genus = req.body.genus;
    var order = req.body.order;
    var calories = req.body.calories;
    var carbs = req.body.carbs;
    var protein = req.body.protein;
    var fat = req.body.fat;
    var sugar = req.body.sugar;

    const { data, error } = await supabase
    .from('fruit_table')
    .insert({
      name: name,
      family: family,
      genus: genus,
      order: order,
      calories: calories,
      carbs: carbs,
      protein: protein,
      fat: fat,
      sugar: sugar,
    })
    .select();

    if (error) {
        console.log('Error');
        res.send(error);
    } else {
        res.send(data);
    }
});

app.listen(port, () => {
  console.log('app is up and running on port', port);
});