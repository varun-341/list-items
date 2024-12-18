
import React,{useState} from "react"

function DynList(){

    const[fruits, setFruits] = useState(["BMW","AUDI"]);
    const[deletedFruits, setDeletedFruits] = useState([]);

    const[cities, setCities] = useState(["KURNOOL","HYDERABAD"]);
    const[deletedCities, setDeletedCities] = useState([]);

    const[foods, setFoods] = useState(["LOLLYPOP","CHIK65"]);
    const[deletedFoods, setDeletedFoods] = useState([]);

    function addFruit(){
        let fruit = document.getElementById('inp').value 
        if(fruit !='') {
        setFruits([...fruits, fruit.toUpperCase()])
       
        document.getElementById('inp').value = ''
        }
        else{
            alert('Enter Valid Car Name')
        }
    }

    function deleteFruit(){
        if (fruits.length > 0) {
            const removedFruit = fruits[fruits.length - 1];
            setFruits(fruits.slice(0, -1)); // Remove the last item
            setDeletedFruits([...deletedFruits, removedFruit]);
        }
    }


    function addCity(){
        let  city = document.getElementById('inp2').value 
        if(city !='') {
        setCities([...cities, city.toUpperCase()])
        document.getElementById('inp2').value = ''
        }
        else{
            alert('Enter Valid City Name')
        }
    }

    function deleteCity(){
        if (cities.length > 0) {
            const removedCity = cities[cities.length - 1];
            setCities(cities.slice(0, -1)); // Remove the last item
            setDeletedCities([...deletedCities, removedCity]);
        }
    }



    function addFood(){
        let  food = document.getElementById('inp3').value 
        if(food !='') {
        setFoods([...foods, food.toUpperCase()])
        document.getElementById('inp3').value = ''
        }
        else{
            alert('Enter Valid Food Name')
        }
    }

    function deleteFood(){
        if (foods.length > 0) {
            const removedFood = foods[foods.length - 1];
            setFoods(foods.slice(0, -1)); // Remove the last item
            setDeletedFoods([...deletedFoods, removedFood]);
        }
    }
    function deleteSpecific(){
       alert('Sorry My Shivam Sir Didnt Explain This Option');
        
    }



    return(
        <div id="parent">
              <div id="bgvid">
                 <video autoPlay loop muted>
                    <source src="VIDEO/bgvid.mp4" type="video/mp4"/>
                 </video>
              </div>
        
        <div id="first-container">
            <input className="box" id="inp" placeholder="Enter Car Name"></input>
            <button className="box" id="fbox" onClick={addFruit}>Add Car</button>
            <button className="box" id="cbox" onClick={deleteFruit}>DELETE</button>
          <div id="lists">
           <pre> ADDED ITEMS   ↔️   DELETED ITEMS</pre>
           <p> {fruits.map(f=> <li id="li1">{f}</li>)} </p> 
              <div id="delete">
               <p>{deletedFruits.map(del=> <li id="del-list">{del}</li>)} </p>
              </div>
           </div>
        </div>

        <div id="second-container">
        <input className="box" id="inp2" placeholder="Enter City Name"></input>
            <button className="box" id="fbox" onClick={addCity}>Add City</button>
            <button className="box" id="cbox" onClick={deleteCity}>DELETE</button>
          <div id="lists">
           <pre> ADDED ITEMS   ↔️   DELETED ITEMS</pre>
           <p> {cities.map(c=> <li id="li1">{c}</li>)} </p> 
              <div id="delete">
               <p>{deletedCities.map(delC=> <li id="del-list">{delC}</li>)} </p>
              </div>
           </div>
        </div>

        <div id="third-container">
        <input id="specific" placeholder="Want to Delete Specific?"></input><button onClick={deleteSpecific} id="remove">Remove</button>
        <input className="box" id="inp3" placeholder="Enter Food Name"></input>
            <button className="box" id="fbox" onClick={addFood}>Add Food </button>
            <button className="box" id="cbox" onClick={deleteFood}>DELETE</button>
          <div id="lists" className="third">
           <pre> ADDED ITEMS   ↔️   DELETED ITEMS</pre>
           <p> {foods.map(fo=> <li id="li1">{fo}</li>)} </p> 
              <div id="delete">
               <p>{deletedFoods.map(delFo=> <li id="del-list">{delFo}</li>)} </p>
              </div>
           </div>

        </div>
        </div>
    )
}

export default DynList;