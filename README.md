# Guru-Seeker Management System

## Description
This project is a Guru-Seeker management system built with Node.js, Express.js, and MongoDB. It provides functionalities to add Gurus and Seekers, assign Seekers to Gurus, and toggle the top status of Gurus.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Database](#database)
- [License](#license)

## Installation
1. Clone the repository:
2. Install dependencies:
3. Set up MongoDB Atlas and get your connection string.

## Usage
1. Replace the MongoDB connection string in `app.js` with your own connection string.
2. Start the server:
3. You can now access the API endpoints.

## Endpoints
### Gurus
- **POST /g/addGuru**: Add a new Guru.
- **POST /g/assignSeeker**: Assign a Seeker to a Guru.
- **PUT /g/toggleTopGuru/:guruId**: Toggle the top status of a Guru by ID.

### Seekers
- **POST /s/createSeeker**: Create a new Seeker.

## Database
The project uses MongoDB as its database. It contains two collections:
- **GuruData**: Stores information about Gurus.
- **SeekerData**: Stores information about Seekers.

## License
This project is licensed under the ISC License.

