import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    taskText: {
        type: String,
        required: true

    },
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    todoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }
});

export const SubTodo = mongoose.model('SubTodo', subTodoSchema);    