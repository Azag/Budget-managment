# personal-budget

Simple Node/Express API to manage my budget. Users can create, read, update, and delete envelopes.
Only server side code

## Running the app
To run locally, run `npm install`, then `npm run start`
Localy access at `http://localhost:1000/`

## Requests

 - Retrieve envelopes using `GET /envelopes`
 - Retrieve a single envelope using `GET /envelopes/{id}`
 - Create an envelope using `POST /envelopes`
 - Delete an envelope using `DELETE /envelope/{id}`
 - Update an envelope using `PUT /envelope/{id}`


