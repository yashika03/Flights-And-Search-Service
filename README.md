# Flight And Search Service
This is the FlightsAndSearch service for the Airline Management Project.
### Project Setup
1. Clone the project
2. Run ```npm install``` in the command propmt
3. Create ```.env``` file outside src and write the PORT number.
4. Create a config.json file inside config folder and write the below code inside that file:
```
{
  "development": {
    "username": "root",
    "password": <your sql password>,
    "database": "Flights_Search_Database_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
### Database consists of four tables:
1. Airplane Table
2. Flight Table
3. Airport Table
4. City Table


### Tables
City Table -> id, name, created_at, updated_at
Airplane Table -> id, name, city_id, address, created_at, updated_at
One city can have many tables but an airport can only be in one city (one to many relationship).