import React from 'react';
import './App.css'; 


function App() {
  return (
    <div className="container-fluid">
    <br></br><br></br>
      
        
  
  
  <form>
    <div class="form-group">
   
      <input type="text"  id=" first name" placeholder="Enter First Name"></input><br></br><br></br>
      <input type="text"  id=" last name" placeholder="Enter Last Name"></input><br></br><br></br>
      <input type="text"  id=" email" placeholder="Enter Email"></input><br></br><br></br>
      <input type="number"  id="Contact number" placeholder="Enter Contact number"></input><br></br><br></br>
      <input type="text"  id="event type" placeholder="Enter Event Type"></input><br></br><br></br>
      <div class="ab">
      <input  type="Time"  id="time" placeholder="Time"></input><br></br><br></br></div>
     <div class="bc">
      <input type="text"  id="time" placeholder="Time"></input><br></br><br></br></div>
      <div class="dc">
      <input type="text"  id="Address" placeholder="Enter Address"></input><br></br><br></br></div>
      
      <button >Save</button>
      <button  >Discard</button>
    </div>
   
  </form>  
    </div>
  );
}

export default App;