import { Category } from "./Category";
import { Course } from "./course";

Category.hasMany(Course)
Course.belongsTo(Category)

export{
    Category,
    Course
}