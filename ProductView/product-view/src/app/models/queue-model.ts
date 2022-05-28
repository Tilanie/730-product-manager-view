import { TaskModel } from "./task-model";
import { UserModel } from "./user-model";

export class QueueModel {
    id: number;
    taskIds: string[];
    userIds: string[];
    tasks: TaskModel[];
    users: UserModel[];
    state: string;
     
   constructor(
     id?: number,
     tasks?: TaskModel[],
     users?: UserModel[],
     taskIds?: string[],
     userIds?: string[],
     state?: string,
   ){
     this.id = id ? id: 0;
     this.tasks = tasks ? tasks : new Array<TaskModel>();
     this.users = users ? users : new Array<UserModel>();
     this.state = state ? state: "";
     this.taskIds = taskIds ? taskIds : [];
     this.userIds = userIds ? userIds : [];
   }
 }
 