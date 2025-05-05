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
- **Step 2:** Open the React project in VS Code, then open the Gitbash terminal in it. Type the command given below:
  
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
  
- **Step 4:**  Go To `App.jsx `. Add the codes given below:
  
  ```
  import RootLayout from './components/layouts/RootLayout'
   import { Routes, Route } from 'react-router-dom'


    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />          
        <Route path="about" element={<About />} /> 
      </Route>
    </Routes>
  
  ```
  #### **Example:**
  ![image](https://github.com/user-attachments/assets/eccfc953-4790-4975-a937-1eb2506b591a)

- **Step 5:**  Go To `RootLayout.jsx `. Add the codes given below:
  
  ```
  import { Outlet } from 'react-router-dom'
     
      <Header/>
        <Outlet/>
      <Footer/>  
  ```
  #### **Example:**
  ![image](https://github.com/user-attachments/assets/cc590e20-cf04-487c-bb71-44dde3d2465e)




  
