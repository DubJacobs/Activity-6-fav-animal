$(document).ready(function() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      method: 'GET',
    }).then(function(todos){
      const $todoList = $('ul');
      // console.log(todos);
    //  Loop through the response/todos array
      todos.forEach(function(todo) {
        console.log(todo);
        //   for each one create an li
        const $li = $('<li>');
        //   add a class called list-group-item to the li
        $li.addClass('list-group-item');
        //   create a div
        //   add a class called md-v-line to the div
        const $div = $('<div>').addClass('md-v-line');
        //   create an icon tag
        const $i = $('<i>');
        // name === 'manny' ? sayHi() : sayHello();
        //   check if the todo.completed is true or false
        //        if it's true
        //          add a classes fas fa-check mr-5 to the icon
        //        else
        //           add a classes fas fa-times mr-5 to the icon
        $i.addClass(todo.completed ? 'fas fa-check mr-5' : 'fas fa-times mr-5' );
        //    change the text of the li to todo.title
        // $li.text(todo.title);
        //    append the div to the li
        //    append the icon to the li
        $li.append($div, $i, todo.title);
        $todoList.append($li);
        //   append the li the to the ul
        //
      })
    });
  });
  function sayHi() {
    console.log('hi');
  }
  function sayHello() {
    console.log('hello')
  }
  function isEven(name) {
  }
  