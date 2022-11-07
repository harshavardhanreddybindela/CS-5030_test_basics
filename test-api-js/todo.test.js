

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    //add test case
    test("add_todo", () =>{
        todo = {
            "id":4,
            "title": "T3",
            "description": "D2",
            "done": false
        }
        todo_service.add_todo(todo);
        expect(todo_service.get_todos().length).toEqual(4);
    })

    //update test case
    test("update_todo", () => {
        todo_service.update_todo(1,'T2','This is new description',false);
        expect(todo_service.get_todos().length).toEqual(4);
    });

    //delete test case
    test("delete_todo", () => {
        todo_service.delete_todo(3);
        expect(todo_service.get_todos().length).toEqual(3);
    });
});