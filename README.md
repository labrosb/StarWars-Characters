# StarWars Characters

A simple Web App presenting StarWars Characters along with their planet info, consuming the SWAPI Api.
The app supports search by character name and shorting by any character's info functionalities.

## Limitations

The SWAPI api doesn't support sorting functionality. Therefore, to implement sorting it's nesesairy to retrieve all the info at once, without any pagination strategy.


## Setup instructions
To install and run the project:
- Clone the repo to your local device
- Rename the .env.example to .env (.env.example contains the correct host value already)
- Open a terminal, navigate to the project's root and execute `npm run install`
- Execute `npm run start`
  - A browser should automatically open. You can now access the app!
