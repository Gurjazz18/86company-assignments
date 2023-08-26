
<h1 align="center" id="title">Media App</h1>
This app is like a digital bulletin board where you can add and view users. Imagine you have a wall where you can stick notes with people's names and email addresses.

Backend (the behind-the-scenes part):

The server is like the manager of this bulletin board. It's built using a tool called Express.
The database (MongoDB) is like a big drawer where the notes are stored.
There are special notes called users. Each user note has a name and email.
Frontend (what you see and interact with):

The app is the screen you look at, and it's created using React.
The list you see is like a collection of notes. Each note has a name and email.
You can add a new note by typing a name and email in the spaces provided. It's like sticking a new note on the board.
How It Works:

When you add a new note (user), the app talks to the server and asks it to store the new note in the database.
When you open the app, it talks to the server to get the list of notes (users) from the database and shows them on the screen.
So, it's like a digital board where you can keep track of people's names and email addresses, and you can add new people whenever you want. The app and the server work together to make this happen!


## 🛠 Built with 

Technologies used in the project:

![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&amp;logo=javascript&amp;logoColor=F7DF1E)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB)

![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white)

![Redux](https://img.shields.io/badge/ContextApi-593D88?style=for-the-badge&amp;logo=redux&amp;logoColor=white)

![Chakra-UI](https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&amp;logo=chakra-ui&amp;logoColor=white)

![Node-JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&amp;logo=nodedotjs&amp;logoColor=white)

![Express-JS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&amp;logo=express&amp;logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white)

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens)

## 💻 Screenshots

**Home Page:**
![Home_Page](https://github.com/Gurjazz18/86company-assignments/assets/96822665/495ac631-e0f8-4f6a-9419-5aeaccba32ac)


**Login Page:**
![Login_Page](https://github.com/Gurjazz18/86company-assignments/assets/96822665/86563a8b-1cf0-4a5a-ac47-4c43765170e5)


**AllUser Table:**
![AllUser](https://github.com/Gurjazz18/86company-assignments/assets/96822665/d06a9222-ea37-46a2-8aa8-5ced34a78531)


**Top 5 users:**
![image](https://github.com/Gurjazz18/86company-assignments/assets/96822665/649d388c-9595-48f3-9e54-53802999a36c)


**SignUp Page:**
![SignUp_Page](https://github.com/Gurjazz18/86company-assignments/assets/96822665/67525596-3712-414f-ba5b-62727b5ffe06)


**Top 5 Post:**
![image](https://github.com/Gurjazz18/86company-assignments/assets/96822665/14393624-60aa-4c33-bca1-f5447af9ce9e)



## ✨ Features 

- Live previews
- Fullscreen mode
- Cross platform


## 🚀 Demo

**Front-end deployed URL:**

(https://frontend-rmt2kdr5e-gurjazz18.vercel.app/)

**Back-end deployed URL:**

[https://splendid-bear-cap.cyclic.app/](https://eight6app-0xzc.onrender.com)

##  📁 Folder structure
#### `Frontend` - Holds the client application
- #### `public` - This holds all of our static files
- #### `src`
   
    - #### `components` - This folder holds all of the different components that will make up our pages
    - #### `pages` - These represent a unique page on the website i.e. Home ,Allusers,signIn signOut,signUp. 
    - #### `contextAPI` - It is responsible for global state management of our app.
    - #### `App.js` - This is what renders all of our browser routes and different pages
    - #### `index.js` - This is what renders the react app by rendering App.js.
- #### `package.json` - Defines npm behaviors and packages for the client
#### `Backend` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB uri
- #### `middlewares` - This holds all our middlewares used in our application
- #### `models` - This holds all of our data models or business logic
- #### `controllers` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - An entry file for our Node JS application
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore

# Installation

Clone the project
```bash
git clone https://github.com/SCjadhav21/Project_ShopQ_Mart.git
```
## Client-side usage

Go to the project directory

```bash
$ cd frontend          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm run start        // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```
## Server-side usage

**Environment Variables:-**

To run this project, you will need to add the following environment variables to your .env file

```
port                    // the port on which the server will run
mongoDbUrl              // your mongoDB URI to connect to the mongoDB atlas

```

**Start**

```bash
$ cd backend            // go to server folder
$ npm i                 // npm install packages
$ npm run server        // run it locally
```
