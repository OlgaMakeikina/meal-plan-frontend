import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
const MyMeals = ({ text, updatingInInput, deleteMeal }) => {
return (
    <div>
        <p>{text}</p>
        <AiFillEdit onClick={updatingInInput}/>
        <MdDelete onClick={deleteMeal}/>
    </div>
)
}

export default MyMeals;