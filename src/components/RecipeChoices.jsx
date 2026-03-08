import { useState } from "react";

const RecipeChoices = ({ handleChange, label, choices, currentVal, error }) => {
    return (
      <div className="recipe-choices">
        <input
          type="text"
          name={label}
          value={currentVal}
          placeholder="Guess the ingredient..."
          onChange={handleChange}
          className={`textbox ${error ? 'textbox-error' : ''}`}
        />
        {error && <div className="error-message">{error}</div>}
        <ul>
          {choices &&
            choices.map((choice) => (
            <li key={choice}>
              {choice}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default RecipeChoices;