class todoservice{
    todo_data = {
        "todo":[{
            "id": 1,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id": 2,
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "id": 3,
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    //adding
    add_todo(todo){
        this.todos = this.todos.todo.concat(todo);
        console.log(this.todos);
    }

    //updating
    update_todo(id,new_title, new_description, new_done){
        this.todos = this.todos.map(todo =>{
            if(todo.id === id){
                todo.title = new_title;
                todo.description = new_description;
                todo.done = new_done
            }
            return todo;
        })
        console.log(this.todos);
    }

    //deleting
    delete_todo(id){
        this.todos = this.todos.filter(todo => todo.id !=id);
        //console.log("Ddelete");
        console.log(this.todos);
    }
}


module.exports= todoservice;