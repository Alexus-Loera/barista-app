import { useState } from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json";
const BaristaForm = () => {
    const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
    });
    
    const [currentDrink, setCurrentDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState({});
    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');
    const [errors, setErrors] = useState({});
    const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
    }
    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': '' });
            
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');
        setErrors({});
            
        getNextDrink();
    };

    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);
    };

    const onCheckAnswer = () => {
        // Reset errors
        const newErrors = {};
        
        // Validate user inputs against valid choices
        if (inputs['temperature'] && !ingredients['temperature'].includes(inputs['temperature'])) {
            newErrors.temperature = "That isn't even an option!";
        }
        if (inputs['milk'] && !ingredients['milk'].includes(inputs['milk'])) {
            newErrors.milk = "That isn't even an option!";
        }
        if (inputs['syrup'] && !ingredients['syrup'].includes(inputs['syrup'])) {
            newErrors.syrup = "That isn't even an option!";
        }
        if (inputs['blended'] && !ingredients['blended'].includes(inputs['blended'])) {
            newErrors.blended = "That isn't even an option!";
        }
        
        setErrors(newErrors);
        
        // Only check answers if no validation errors
        if (Object.keys(newErrors).length > 0) {
            return;
        }

        // Check answers against true recipe
        if (trueRecipe.temp != inputs['temperature']){
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }
        
        if (trueRecipe.milk != inputs['milk']){
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }
        
        if (trueRecipe.syrup != inputs['syrup']){
            setCheckedSyrup('wrong');
        }
        else {
            setCheckedSyrup("correct");
        }
        
        if (trueRecipe.blended != inputs['blended']){
            setCheckedBlended('wrong');
        }
        else {
            setCheckedBlended("correct");
        }
    };
    
  return (
    
    <div>
        <h2>Hi, I'd like to order a:</h2>
        <div className="drink-container">
            <h2 className="mini-header">{currentDrink}</h2>
            <button
                className="button newdrink"
                onClick={onNewDrink}
            >
                🔄
            </button>
        </div>
         <form className="container">
            <div className="mini-container">
              <h3>Temperature</h3>
              <div className="answer-space" id={correct_temp}>
                {inputs["temperature"]} 
              </div>
              <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))}
                label="temperature"
                choices={ingredients["temperature"]}
                currentVal={inputs["temperature"]}
                error={errors.temperature}
              />
            </div>

            <div className="mini-container">
              <h3>Milk</h3>
              <div className="answer-space" id={correct_milk}>
                {inputs["milk"]} 
              </div>
              <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))}
                label="milk"
                choices={ingredients["milk"]}
                currentVal={inputs["milk"]}
                error={errors.milk}
              />
            </div>

            <div className="mini-container">
              <h3>Syrup</h3>
              <div className="answer-space" id={correct_syrup}>
                {inputs["syrup"]} 
              </div>
              <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))}
                label="syrup"
                choices={ingredients["syrup"]}
                currentVal={inputs["syrup"]}
                error={errors.syrup}
              />
            </div>

            <div className="mini-container">
              <h3>Blended</h3>
              <div className="answer-space" id={correct_blended}>
                {inputs["blended"]} 
              </div>
              <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                  ...prevState,
                  [e.target.name]: e.target.value,
                }))}
                label="blended"
                choices={ingredients["blended"]}
                currentVal={inputs["blended"]}
                error={errors.blended}
              />
            </div>
        </form>

        <button className="button submit" onClick={onCheckAnswer}>
            Check Answer
        </button>

        <button className="button newdrink" onClick={onNewDrink}>
            New Drink
        </button>
    </div>
  );
  
};

export default BaristaForm;