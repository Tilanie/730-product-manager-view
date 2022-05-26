import { TaskModel } from "./task-model";
import { UserModel } from "./user-model";

export class QueueModel {
    id: number;
    tasks: TaskModel[];
    users: UserModel[];
    state: string;
     
   constructor(
     id?: number,
     tasks?: TaskModel[],
     users?: UserModel[],
     state?: string,
   ){
     this.id = id ? id: 0;
     this.tasks = tasks ? tasks : new Array<TaskModel>();
     this.users = users ? users : new Array<UserModel>();
     this.state = state ? state: "";
   }
 }
 