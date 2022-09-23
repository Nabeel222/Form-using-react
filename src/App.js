import React from 'react';
import { useState } from 'react';

const App=()=>
{
	const [name, setName]=useState("");
	const [city, setCity]=useState("");
	const [add, setAdd]=useState("");
    const [conno, setConno]=useState("");

    const handleSubmit=(e)=>
    {
    	e.preventDefault();
    	document.getElementById("myname").innerHTML="My Name is "+name;
    	document.getElementById("mycity").innerHTML="I am from "+city;
    	document.getElementById("myadd").innerHTML="My home is at "+add;
    	document.getElementById("myconno").innerHTML="My phone number is "+conno;
    }
        return (
       
            <>
              <center><h1>Application Form</h1></center>
              <center>
              <form method="post" action="save.py" onSubmit={handleSubmit} >
              Name : <input type="text" name="nm" value={name} onChange={(e)=>{setName(e.target.value)}} />
              <br /><br />
              City : <input type="text" name="ct" value={city} onChange={(e)=>{setCity(e.target.value)}} />
              <br /><br />
              Address : <input type="text" name="ad" value={add} onChange={(e)=>{setAdd(e.target.value)}} />
              <br /><br />
              Contact No. :  <input type="text" name="con" value={conno} onChange={(e)=>{setConno(e.target.value)}} />
              <br /><br />
              <input type="submit" value="Save Data"  />
              </form>
              </center>
              <br />
              <center>
              <div style={{width:"400px", border:"3px solid red", backgroundColor:"lightblue"}} >
              <p id="myname"></p>
              <p id="mycity"></p>
              <p id="myadd"></p>
              <p id="myconno"></p>
              </div>
              </center>
              </>

        	);	
}
export default App;