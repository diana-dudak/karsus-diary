let nextTodoId = 0;
export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});
