import React from "react";
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import NewStudent from "./pages/New Student/NewStudent";
import NewUniversity from "./pages/New University/NewUniversity";
import StudentList from "./pages/Student List/StudentList";
import Student from "./pages/Student/Student";

function App() {
  return (
    // <>
    //   <Navbar />
    //   <NewStudent />
    //   <NewUniversity />
    //   <Student />
    // </>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<StudentList />}></Route>
          <Route path='newstudent' element={<NewStudent />}></Route>
          <Route path='newuniversity' element={<NewUniversity />}></Route>
          <Route path='student/:id' element={<Student />}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
