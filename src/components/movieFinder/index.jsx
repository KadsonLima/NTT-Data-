import { useState } from "react";
import "./styles.scss";
import { useDispatch} from 'react-redux';
import { setInputValue, resetInputValue } from '../../actions/inputActions';
import { fetchMovie } from "../../actions/movieActions";

export const MovieFinder = () =>{
    const [localInputValue, setLocalInputValue] = useState('');
    const dispatch = useDispatch();
    
    function handleInputChange(event) {
      setLocalInputValue(event.target.value);
      dispatch(setInputValue(event.target.value));
    }

    function handleSearchClick(){
      dispatch(fetchMovie(localInputValue));
    }
  
    function handleResetClick() {
      setLocalInputValue('');
      dispatch(resetInputValue());
    }

    return <div className="MovieFinder">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <div className="finder">
            <input type="text" value={localInputValue} onChange={handleInputChange}/>
            <button onClick={handleSearchClick}>Search</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    </div>
}
