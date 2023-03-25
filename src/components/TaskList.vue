<!-- src/components/TaskList.vue -->
<template>
  <div class="task-list">
    <h1>Task List</h1>
    <ul class="tasks">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        {{ task }}
        <button @click="removeTask(index)" class="remove-btn">Remove</button>
      </li>
    </ul>
    <input v-model="newTask" @keyup.enter="addTask" class="task-input" />
    <button @click="addTask" class="add-btn">Add Task</button>
  </div>
</template>

<script>
import { useTasksStore } from '@/tasks';
import { ref } from 'vue';

export default {
  setup() {
    const tasksStore = useTasksStore();
    const newTask = ref('');

    const addTask = () => {
      if (newTask.value.trim()) {
        tasksStore.addTask(newTask.value);
        newTask.value = '';
      }
    };

    const removeTask = (index) => {
      tasksStore.removeTask(index);
    };

    return {
      tasks: tasksStore.tasks,
      newTask,
      addTask,
      removeTask,
    };
  },
};
</script>


<style scoped>
.task-list {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

.tasks {
  list-style-type: none;
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.remove-btn {
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.task-input {
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.add-btn {
  display: inline-block;
  background-color: #4caf50;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>