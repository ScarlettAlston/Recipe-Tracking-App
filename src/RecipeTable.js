import React from "react";

function RecipeTable({ recipes, deleteRecipe }) {
  return recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => {
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td>
            <img src={photo} alt={`${photo}`} />
          </td>
          <td className="content_td"><p>{ingredients}</p></td>
          <td className="content_td"><p>{preparation}</p></td>
          <td>
            <button name="delete" onClick={() => deleteRecipe(index)}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
  );
}

export default RecipeTable;
