import axios from 'axios';

const getAllMeals = (setMeal) => {
    axios.get('https://meal-plan-backend-bu3y.onrender.com')
    .then(({data}) =>{console.log(data)
    setMeal(data)
    })
}

const addMeal = (title, setTitle, setMyMeal) => {
    axios.post('https://meal-plan-backend-bu3y.onrender.com/saveMeals', {title})
    .then((data) => {
        console.log(data)
        setTitle("") 
        getAllMeals(setMyMeal)
    })
}

const editMeal = (mealId, title, setMyMeal, setTitle, setEditing) => {
    axios.put('https://meal-plan-backend-bu3y.onrender.com/editMeal', {_id: mealId, title})
    .then((data) => {
        console.log(data)
        setTitle("") 
        setEditing(false)
        getAllMeals(setMyMeal)
    })
}

const deleteMeal = (_id, setMyMeal) => {
    axios.delete(`https://meal-plan-backend-bu3y.onrender.com/deleteMeal`, { _id})
    .then((data) => {
        console.log(data)
        getAllMeals(setMyMeal)
    })
}
export {getAllMeals, addMeal, editMeal, deleteMeal};