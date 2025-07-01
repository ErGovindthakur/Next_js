// Creating todo Schema
import mongoose from "mongoose";

interface Todo extends Document{
todoTitle:string,
todoTask:string
}

// Don't prefer type here 
// type Todo = {
//      todoTitle:string,
//      todoTask:string
// }

const todoSchema = new mongoose.Schema<Todo>({
     todoTitle:{
          type:String,
          required:true
     },
     todoTask:{
          type:String,
          required:true
     }
},{timestamps:true})


export default mongoose.model("TodoModel",todoSchema)