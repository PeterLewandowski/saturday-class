/**
 * 0. npm init in the folder you want to youse for the project
 * 1. Install Firebase Packages: npm i firebase-admin
 * 2. Import Firebase
 * 3. Connect to the database
 * 4. Access the collections
 * 5. Read Documents
 * 6. Insert Documents
 * 7. Search/find Document
 * 8. Edit/Update Documents
 * 
 */

// 2. Import Firebase
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

const serviceAccount = require('./firebase_keys.json');

// 3a. Initialize the app
initializeApp({
  credential: cert(serviceAccount)
});

// 3b. Connect to the database (i.e. Firestore)
const db = getFirestore();

// 4. Access the collection; (collection Reference = colRef)
const usersCollection = db.collection('users')
// can keep it outside of the function below if it may be reused later on

async function readUserDocuments() {
  // 5a. Read Documents
  const snapshot = await usersCollection.get();

  // we need to create an empty array to put the data into for the GET request in the API
  let allUsersDocuments = [];

  // 5b. Iterate through snapshot documents
  snapshot.forEach(function (document) {
    const documentObject = document.data();
    allUsersDocuments.push(documentObject);
  });

  return allUsersDocuments;
}

// readUserDocuments()

/**
 * Create 2 functions
 * reading documents from the following collections:
 * - my_shows
 * - content
 */


async function readMyShowsDocuments() {
  const myShowsCollection = db.collection('my_shows');
  const snapshot = await myShowsCollection.get();

  snapshot.forEach((document) => {
    const documentObject = document.data();
    console.log(documentObject);
  });
}
// readMyShowsDocuments()


async function readContentDocuments() {
  const contentCollection = db.collection("content");
  const snapshot = await contentCollection.get();

  snapshot.forEach((document) => {
    const documentObject = document.data();
    console.log(documentObject);
  });
}
// readContentDocuments()

// 6. Insert Documents

async function registerUser(userObject) {
  // collection reference
  const usersCollection = db.collection('users')

  // Create a document
  const newUserDocument = usersCollection.doc()

  // Set/Insert the new document
  await newUserDocument.set(userObject)

  // Can print the id of the new user that was just created
  console.log(`User of document id: ${newUserDocument.id} \nhas been added\tYay!`)
}

const newUserObject = {
  name: 'Brian',
  phone: 123423596,
  email: 'brian@bocacode.com',
  isAnAdult: true
}
// registerUser(newUserObject)

// 7. Search/Find Document
// name it as a verb, it will do something

async function updateUserFullName(inputEmail, name) {
  // Collection reference
  const usersCollection = db.collection("users");

  //Finding the document with a given email (using .get() method)
  const snapshot = await usersCollection.where("email", "==", inputEmail).get();

  snapshot.forEach(function (document) {
    // First, test if the document search is working
    console.log("Ahmed's doc: " + JSON.stringify(document.data()));
    // This is the document found
    const documentReference = document.ref
  
    // 8. Update the document
    documentReference.update({'name': name})

    /* This is more work for the computer, to create the reference from scratch.

    const userDocRef = usersCollection.doc(document.id)
    userDocRef.update({'name': name}) 

    */

    console.log(`User's name updated to ${name} in document of id: ${document.id} name to: ${name}`)
  });
}

// updateUserFullName('Ahmed@bekhit.com', 'Ahmed Bekhit')

// Create an export of the functions to be used in our API

module.exports = {
  updateUserFullName,
  registerUser,
  readUserDocuments,
  readMyShowsDocuments,
  readContentDocuments
}

