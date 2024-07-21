## Getting Started

Document for reference https://docs.google.com/document/d/15N2aLYUGceIYylT-p2oFcNO6mU3Swhg6Q_nhk1gHDfg/edit

Go to the project and do git clone.
Run `npm i`
Run `npm dev` to run it on local.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to navigate through the project

- Homepage: https://localhost:3000
- Assesment page: https://localhost:3000/assesment
- Leads page: https://localhost:3000/leads
- Thank you page: http://localhost:3000/assessment/thank-you

`pages` directory has all the routes i.e assesment, thankyou and leads

Have implemented GET ans POST API for leads. Note I am not using those api's but its a demonstration that we can use them. For example for post we can use it to save in the database. For get we can pull the data from the DB to show on /leads page.

## How to test API's

We can use any client like postman or insomnia. Type the API and check the results. On the submission of the form /assesments we can see the results in the console log as well.

## Authenticated page

`/leads` is behind a auth system. I am storing the auth value in localStorage. If someone who is logged in the value would `isAuthenticated` would be set to `true`. Otherwise user will be prompted to login and then use the page.

## What I can do more if I had more time.

- Implemented the change of state on Leads page using redux.
- Implemented the end to end testing using playwright.
- Would have validated the form on empty submission.
- Would have deployed it on vercel. I alread had a project running.
- Would have made it close to designs. My idea here was to make it a working app.
