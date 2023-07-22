# Lachoo Connect

![slid1](https://github.com/ashim1588/LachooConnect/assets/87517867/15c601b6-7081-4d35-a13b-8b95800e20ad)

## Description

Lachoo Connect is an Alumni App for our college, Lachoo Memorial College. The app serves as a platform for alumni to connect with each other, share their experiences, and stay updated on each other's current endeavors. It utilizes Firebase for database management and authentication and has been developed using React.

With Lachoo Connect, alumni can view profiles of other alumni and learn about their professional accomplishments and activities. The app fosters a sense of community among former students, enabling them to network, mentor, and collaborate with each other.

## Screenshots

Here are some screenshots of the Lachoo Connect app:

![Screenshot 2023-07-21 at 9 22 29 PM](https://github.com/ashim1588/LachooConnect/assets/87517867/841c544d-ca17-4fd7-909b-bf07232bccd9)

_Description: Login Page._

![Screenshot 2023-07-21 at 9 22 38 PM](https://github.com/ashim1588/LachooConnect/assets/87517867/dfd93795-5663-4529-8e92-a4b1440e095e)

_Description: Signup Page._

![Screenshot 2023-07-21 at 9 21 47 PM](https://github.com/ashim1588/LachooConnect/assets/87517867/1705b14f-3887-4c91-a086-50ca40e9e930)

_Description: Home Page._

![Screenshot 2023-07-21 at 9 22 22 PM](https://github.com/ashim1588/LachooConnect/assets/87517867/69c619af-7e00-47d0-b9f1-97eac04eb8cf)

_Description: User Profile Page._

![Screenshot 2023-07-21 at 9 21 58 PM](https://github.com/ashim1588/LachooConnect/assets/87517867/d70cf326-c371-40a4-8c6d-ded87b367488)

_Description: Feed Page._

![Screenshot 2023-07-21 at 9 22 10 PM](https://github.com/ashim1588/LachooConnect/assets/87517867/6989efa8-71fe-454a-9262-2105673797e8)

_Description: Find Alumni Page displaying details of all the alumni._


## Getting Started

To get started with Lachoo Connect, follow the steps below:

### Prerequisites

Before running the application, ensure you have the following installed on your system:

- Node.js (https://nodejs.org) - 
- NPM (Node Package Manager) - 

### Installation

1. Clone this repository to your local machine or download the zip file and extract it.
2. Navigate to the project directory using the command line.

### Setup API Keys

You need to add your API keys in a `.env` file. Follow the instructions below:

1. In the root directory of the project, create a new file named `.env`.
2. Add your Firebase API keys in the `.env` file using the following format:

   ```
   REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY_HERE
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN_HERE
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID_HERE
   REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET_HERE
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID_HERE
   REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID_HERE
   ```

3. Save the `.env` file.

### Running the Application

1. Open the command line and ensure you are in the project root directory.
2. Run the following command to install the required dependencies:

   ```
   npm install
   ```

3. After the installation is complete, start the application with:

   ```
   npm start
   ```

4. The application will now be accessible at `http://localhost:3000` in your web browser.

## Contributing

If you find any issues or have ideas for improvements, please feel free to contribute to the Lachoo Connect project. Here's how you can do it:

1. Fork this repository to your GitHub account.
2. Create a new branch from the `main` branch with a descriptive name, e.g., `feature/new-feature` or `bugfix/issue-123`.
3. Make your changes and commit them with a clear and concise message.
4. Push your changes to your forked repository.
5. Submit a pull request to the `main` branch of this repository, explaining your changes.

## Known Issues

- The application might have some bugs due to its limited development time.
- Certain functionalities are still under development and might not be fully implemented.

## License

This project is licensed under the [MIT License](LICENSE).

