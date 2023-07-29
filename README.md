## Setup Instructions

Follow these steps to set up and run the project locally:

1. Clone the repository:
2. git clone <repository-url>
Navigate to the project directory:

cd <project-directory>

Install the dependencies:


npm install

Configure Firebase:

- Create a new Firebase project at [firebase.google.com](https://firebase.google.com/).
- Enable Firebase Authentication and Firestore in your project's console.
- Copy the Firebase configuration object, including the API key, into the `src/firebase.js` file in your project.

  ```javascript
  // src/firebase.js
  
  import firebase from 'firebase/app';
  import 'firebase/auth';
  import 'firebase/firestore';
  
  const firebaseConfig = {
    // Paste your Firebase configuration object here
  };
  
  firebase.initializeApp(firebaseConfig);
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  ```

5. Start the development server:

npm start


6. Open your browser and navigate to `http://localhost:3000` to see the application running.

Best of luck
