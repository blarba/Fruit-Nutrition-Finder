# Fruit Nutrition Finder
This is the Fruit Nutrition Finder - a simple project that makes use of the Fruityvice API.

## Project Description
The website has several pages - the home and about pages are self-explanatory and talk a little bit about how to use the website and the functionality of the other pages.
The Fruit Finder tab lets you search for a fruit in the Fruityvice database by its name, family, genus, or order, and returns all fruits (if possible) containing the search term.
The Nutrition Sorter searches for a particular nutrient (like carbs, protein, fat, etc.) and filters search results based on a minimum and maximum value inputted by the user.
The Fruit Database simply loads all available fruits within the Fruityvice database.
The project makes use of Supabase to hold a live database that the website retrieves data from, and also allows real-time editing of the database values to update the website simultaneously.
Vercel is also used to be able to deploy the webapp and be able to host the website and have it run on a real, local server.

## Target Browsers
This is mainly for use on a desktop, as I have not tested the usability of the website on mobile platforms.

## Link to Developer Manual
[Go to Developer Manual](#developer-manual)

## Developer Manual
In order to successfully run this app, a Supabase account and setup is required. This manual assumes you have an IDE or equivalent to to work with python code(e.g. Visual Studio Code).
1. Before starting, ensure you have ***Node.js*** installed. if not, go ahead and follow the steps to do so at https://nodejs.org/en.
2. You will also need the CORS browser extension in order to successfully make API calls to Fruityvice, so go get that
3. Download this repository and hold it in your own GitHub repo or equivalent
4. Head to https://supabase.com/ and sign up for an account; only a free one is necessary
5. Create an organization (name is appropriately) and create a new project (name it appropriately)
6. Create a new table, and initialize it with column headers from the Fruityvice API - these would be ***Name, Family, Genus, Order, Calories,	Carbs (g),	Protein (g),	Fat (g),	Sugar (g)***
7. If you want to go ahead and populate the table with data from Fruityvice, use the fruits.csv to import to make it easier - I already got the data from Fruityvice onto the csv
8. Click on the connect button at the top, next to your project name - click on the App Frameworks tab and note down your ***SUPABASE_URL*** and ***SUPABASE_ANON_KEY***, you will need it later.
9. In VSCode or IDE equivalent, create a new folder and type in the console/terminal ***npm install @supabase/supabase-js***
10. Once finished, type in the terminal ***npm install express***, ***npm install nodemon***, and ***npm install cors***.
11. Go ahead and copy the index.js file from here - the only notable thing here (if you wish to host this on your own side) is to change the SUPABASE_URL and KEY to your own ones given in Supabase, inside the .env folder
12. Log into Vercel using your GitHub account, and when asked to import a Git Repository, select this one, no changes is the settings is needed
13. Vercel should automatically deploy the repo and start hosting, use the url in the Domains category, not Deployment
14. You should be all set! sometimes CORS can be finnicky and prevent edits to Supabase when it's turned on, so if you plan on editing your table in Supabase turn CORS off first, then turn it back on when you finish

### API Calls
there are a couple APIs in the server application endpoints, listed below:
* an app.get() call that gets the fruit database HTML file, as it loads the database through Supabase and not Fruityvice
* an app.get(/getfruitdb) call that gets the actual fruit table with data in my Supabase project
* an app.post(/fruit) call that posts a new fruit made by the user into the Supabase database
* several app.use() calls that just make the front end and back end cooperate - one notable one is the app.use(cors), as CORS does not play nice with different front end and back end ports - this call fixes that

### Bugs, Roadmap, Future Expectations
I haven't encountered any notable bugs other than the CORS extension preventing the editing of Supabase tables.
There isn't really a roadmap for future updates other than maybe making the syntax look nicer, and maybe changing the other Fruityvice API calls to use the Supabase database instead
Don't expect much for future updates, so if you want to change something, go ahead
