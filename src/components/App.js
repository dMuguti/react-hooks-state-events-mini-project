import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList, setTaskList] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (taskId) => {
    setTaskList(taskList.filter((task) => task.id !== taskId));
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const displayedTasks = selectedCategory === "All"
    ? taskList
    : taskList.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleCategorySelect} />
      <NewTaskForm categories={CATEGORIES.filter(c => c !== "All")} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={displayedTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
