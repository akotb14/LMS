import React from "react";
import Navb from "./component/Nav";
import { BrowserRouter as Router,Routes,Route,  } from "react-router-dom";
import PDFS from "./component/PDFS"
import Cards from "./component/Cards";
import Assignment from "./component/Assignment";
import Lect from "./component/page-1";



const App = () => {
    return (
        <>
                <Router>  
<Navb/>
                  <Routes>
            
                  <Route path='/' element={<Cards/>} exact/>

                 

                    

                  </Routes>
      
                </Router>
            
        </>

    )
}

export default App;


{/* <Route path='/add-course' component={CourseForm} > <CourseForm /> </Route>
                    <Route path='/submit' component={Course} exact> <Course /> </Route>
                    <Route path='/RequestCourse' component={RequestCourse} exact> <RequestCourse /> </Route>
                    <Route path='/Assignment' component={Assignment} exact> <Assignment /> </Route>
                    <Route path='/RequestBook' component={RequestBook} exact> <RequestBook /> </Route>
                    <Route path='/Quiz' component={Quiz} exact> <Quiz /> </Route>
                    <Route path='/Result' component={Result} exact> <Result /> </Route>
                    <Route path='/Student' component={Student} exact> <Student /> </Route>
                    <Route path='/add-lecture' component={AddLec} exact> <AddLec /> </Route> 
                  
                  
                                    <Route path='/' element={<Assignment/>} exact/>
*/}