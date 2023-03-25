import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: ["east",'dance'],
  }),

  actions: {
    addTask(task) {
      this.tasks.push(task);
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});