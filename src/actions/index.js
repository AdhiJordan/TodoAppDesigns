export const GET_TODO_DATA = 'GET_TODO_DATA';


export const addTodo = text => {
  return {
    type: 'GET_TODO_DATA',
    text
  }
}