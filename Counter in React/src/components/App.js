import React, {useState} from "react";
import Counter from "./Counter";
import Button from "./Button";

function App(){

  let [count, setCount] = useState(0);

  function handleIncrClick(){
      
      if(count >= 10){
        setCount(10);
      }else{
        count++
        setCount(count);
      }
  }
  function handleDecrClick(){
   
    if(count <= 0){
      setCount(0);
    }else{
      count--;
      setCount(count);
    }
  }

  console.log(count)
  
  return(
    <div className="container">

      <Counter count = {count} />
      
      <div>
        <Button 
          operation = "+"
          onClick = {handleIncrClick}
          // disabled= {count === 10}    --> another way to stop the count at 10
        />
        <Button
          operation = "-"
          onClick = {handleDecrClick}
          // disabled = {count === 0}   --> another way to stop the count at 0
         />
        {count === 10 && <p>Maximum count reached!</p>}  {/* used to show the message when the counter reaches at 10 */}
        {count === 0 && <p>Minimum count reached!</p>}
      </div>
     

    </div>
  );
}

export default App;