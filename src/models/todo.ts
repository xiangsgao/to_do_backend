import prisma from "../clients/prisma";

class TodoModel {


    static async getAll(){
        const todos = await prisma.todo.findMany();
        return todos;    
    }
    
    static async create(title: string, color: string, completed?: boolean){
        return prisma.todo.create({
            data: {
              title,
              color,
              completed,
            },
          });
    }


    static async update(id: string, title: string, color: string, completed: boolean){
        const updatedTodo = await prisma.todo.update({
            where: { id: Number(id) },
            data: { title, color, completed },
        });

        return updatedTodo;
    }

    static async delete(id: string){
        await prisma.todo.delete({
            where: { id: Number(id) },
        });
    }

}


export default TodoModel;