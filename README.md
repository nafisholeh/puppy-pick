# Puppy Pick - React Application

Welcome to **Puppy Pick**! This is a React-based application designed to help users pick their favorite dog breeds and save them. The project is built using React 18 and Firebase for authentication and data storage.

<div>
  <a href="https://www.loom.com/share/5e8113bbecfc4c3a8bd0fb3ebdc1ef0b">
    <p>Puppy Pick! demo - Watch Video</p>
  </a>
  <a href="https://www.loom.com/share/5e8113bbecfc4c3a8bd0fb3ebdc1ef0b">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/5e8113bbecfc4c3a8bd0fb3ebdc1ef0b-cc2b2efc38310c65-full-play.gif">
  </a>
</div>

## Getting Started

To get this project up and running on your local machine, follow the steps below.

### Prerequisites

- Node.js (v14 or higher)
- NPM (v6 or higher)
- Firebase account

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/puppy-pick.git
cd puppy-pick
```

### Step 2: Setup Firebase Project

1. **Create a Firebase Project:**
   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add Project" and follow the prompts to create a new project.

2. **Enable Firebase Authentication:**
   - In the Firebase Console, navigate to `Authentication` under the `Build` section.
   - Click on "Get Started".
   - Enable the Email/Password sign-in method.

3. **Setup Firestore Database:**
   - In the Firebase Console, navigate to `Firestore Database` under the `Build` section.
   - Click on "Create Database" and follow the prompts to set up Firestore in production mode.
   - Create a collection named `users` and a collection named `selectedBreeds` (you can create these programmatically when your app runs).

### Step 3: Setup Environment Variables

Create a `.env` file in the root of your project and add your Firebase project configuration. You can find this configuration in the Firebase Console under Project Settings > General > Your apps > Firebase SDK snippet.

```bash
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Run the Application

```bash
npm start
```

This will start the development server and open the app in your default web browser.

### Step 6: Build for Production

When you're ready to deploy the app, you can create an optimized production build using:

```bash
npm run build
```

This will create a `build` directory with all the production-ready files.

### Step 7: Deploy to Firebase Hosting (Optional)

If you'd like to deploy your app to Firebase Hosting:

```bash
firebase login
firebase init
firebase deploy
```

## Firebase Authentication Setup

To set up authentication:

1. Go to the Firebase Console.
2. Navigate to `Authentication` under the `Build` section.
3. Click "Get Started".
4. Under the "Sign-in method" tab, enable `Email/Password`.

## Firestore Setup

To set up Firestore:

1. Go to the Firebase Console.
2. Navigate to `Firestore Database` under the `Build` section.
3. Click on "Create Database".
4. Choose to start in production mode (locked mode) and select a location for your database.
5. Create the collections you need (e.g., `users`, `selectedBreeds`). You can also create these collections programmatically from your app.

## Project Structure

- `src/`
  - `assets/` - Contains static assets such as images.
  - `components/` - Contains React components.
  - `contexts/` - Contains context providers for authentication and progress management.
  - `firebase/` - Contains Firebase configuration and initialization.
  - `shared/` - Contains shared components used throughout the app.
  - `App.js` - Main application component.
  - `index.js` - Entry point for the React application.

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
