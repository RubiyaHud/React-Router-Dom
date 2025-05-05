# React Router DOM
The term React Router DOM can be broken down as follows:

- **React:** Refers to the React library.
- **Router:** Refers to the routing system that enables navigation between views or pages.
- **DOM:** Stands for Document Object Model, and in this context, it indicates that this router is designed for web browsers (as opposed to `react-router-native`, which is for mobile apps).

So, in essence: 

**React Router DOM = React + Routing System for the Web DOM**

## Installation Steps:
- **Step 1:** Organize folders and files inside the `src` folder of a React project (illustrated below). Here, `RootLayout.jsx` file is created inside the layouts folder.
  ![ReactSrcDirStructure drawio](https://github.com/user-attachments/assets/8c66c699-cdfc-4bc9-820c-732172a45311)
- Open the React project in VS Code, then open the Gitbash terminal in it. Type the command below:
  
  ```
  npm install react-router-dom
  
  ```
- **Step 3:**  Go To `main.jsx`. Add the codes given below:
  
  ```
  import { BrowserRouter } from 'react-router-dom';
   
   <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
  
  ```
  #### **Example:**
  ![image](https://github.com/user-attachments/assets/a090e581-1447-49d5-8859-19945aa231c6)
