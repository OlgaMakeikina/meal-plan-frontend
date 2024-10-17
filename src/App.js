import MyMeals from './MyMeals';
import './App.css';
import { useEffect, useState } from 'react';
import { getAllMeals, addMeal, editMeal, deleteMeal } from './FetchMeals';

function App() {

  const [myMeal, setMyMeal] = useState([]);
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMyMeal)
  }, [])
  
  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }
  return (
    <div>
     <h1>Meal Plan</h1>
     <input
        type="text"
        placeholder="Add a meal"
        value = {title}
        onChange={(e) => setTitle(e.target.value)}
     />
     <button 
     disabled={!title} 
     onClick=
     {editing ? () => editMeal(mealId, title, setMyMeal, setTitle, setEditing):()=> addMeal(title, setTitle, setMyMeal)}>
     {editing? "Edit": "Add"}
     </button>

     {myMeal.map((meal) => (
  <MyMeals 
    text={meal.title} 
    key={meal._id} 
    updatingInInput={() => updatingInInput(meal._id, meal.title)} 
    deleteMeal={() => deleteMeal(meal._id, setMyMeal)}  
  />
))}

    </div>
  );
}

export default App;
