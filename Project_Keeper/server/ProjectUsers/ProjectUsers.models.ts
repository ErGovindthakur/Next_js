import mongoose, {Document} from "mongoose";

export interface ProjectUser extends Document{
     name:string,
     email:string,
     password:string
}

const projectSchema = new mongoose.Schema<ProjectUser>({
     name:{
          type:String,
          required:true
     },
     email:{
          type:String,
          required:true,
          unique:true,
          lowercase:true
     },
     password:{
          type:String,
          required:true
     }
},{
     timestamps:true
})

const ProjectModel = mongoose.model<ProjectUser>("Project",projectSchema)