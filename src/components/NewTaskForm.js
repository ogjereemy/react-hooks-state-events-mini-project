import React from "react";
import { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category"  onChange={(e) => setCategory(e.target.value)}>
        {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category}>{category}</option>
            ))}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
