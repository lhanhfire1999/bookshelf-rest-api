import {User, userModel} from '../../models/User';

export class SqlUserService {
  constructor() {
  }
  all(): Promise<User[]> {
    return new Promise<User[]>((resolve, reject) => {
      try{
        const users =  new userModel().fetchAll();
        resolve(users);
      }
      catch(err){
        reject(err);
      }
    });
  }
  load(id: string): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      try{
        const user = userModel.where("id", id).fetch();
        resolve(user);
      }
      catch(err){
        reject(err);
      }
    });
  }
  insert(user: User): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try{
        const data =  userModel.forge({...user})
        .save(null, {method: 'insert'})
        resolve(data);
      }
      catch(err){
        reject(err);
      }
    });
  }
  update(user: User): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const {id, username, email, phone, dateOfBirth} = user;
      try{
        const data =  userModel.where("id", id)
        .save(
          { username, email, phone, dateOfBirth },
          { patch: true }
        );
        resolve(data);
      }
      catch(err){
        reject(err);
      }
    });
  }
  delete(id: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      try{
        const user =  userModel.where("id", id).destroy();
        resolve(user);
      }
      catch(err){
        reject(err);
      }
    });
  }
}