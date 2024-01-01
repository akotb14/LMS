import React from "react";
import { AwesomeButton } from "react-awesome-button";

const Assignment = () => {
    const centerDivStyle = {
        display: 'flex',
        justifyContent:'center',
      };


      

    return (
        <section className="hero pt-3 h-[100vh] flex items-center justify-center " style={{ background: "linear-gradient(to right,#526D82,#9DB2BF,#526D82)" }} >

            

<div class=" pt-5 relative flex flex-col  text-gray-700  shadow-md bg-clip-border rounded-xl w-96 justify-center items-center   "style={{  background: "linear-gradient(to left,#9DB2BF, #DDE6ED)" }}>
  
  <div
    class="w-fit h-fit  relative h-56 mx-4  overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 bg-#EEF5FF ">
   
    <img className=""

      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="card-image" />

      
  </div>


  <div class="p-3  justify-center items-center" >
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Data Structure - CS245</h5>


    <li class=" pb-1">
  
                     <a href="#" class="flex items-center p-3 text-base font-bold text-black rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black  ">

                        <span class="flex-1 ms-3 whitespace-nowrap justify-center items-center" >Book</span>
                     </a>

                 </li>

                 <li class=" pb-1" >

                     <a href="#"  class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black ">
        
                        <span class="flex-1  whitespace-nowrap" >Lectures</span>
                     </a>
                 </li>

                 <li class=" pb-1">
                     <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black  ">
                         <span class="flex-1  whitespace-nowrap">Vedeos</span>
                     </a>
                 </li>

                 <li class=" pb-1">
                    <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black  ">
                        <span class="flex-1  whitespace-nowrap">Assinments</span>
                    </a>
                 </li>

                 <li class=" pb-1">
                      <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black  ">
                          <span class="flex-1  whitespace-nowrap">Quizes</span>
                     </a>
                 </li>

                 <li class=" pb-1">
                     <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black  ">
                         <span class="flex-1  whitespace-nowrap">Question Bank</span>
                     </a>
                 </li>

                 <li class=" pb-1">
                     <a href="#" class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg shadow-lg bg-clip-border bg-gray-150 hover:bg-white hover:text-black  ">
                         <span class="flex-1  whitespace-nowrap">Project</span>
                     </a>
                 </li>
        
  
  </div>
</div>


        

        </section>

    )
}

export default Assignment;