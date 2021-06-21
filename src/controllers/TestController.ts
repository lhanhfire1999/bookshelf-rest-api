import {Request, Response} from 'express'
import {userModel} from '../models/User'

export const All = async ( req: Request , res: Response  )=>{
  try{
    const users = await new userModel().fetchAll();
    res.status(200).json(users);
  }
  catch(err){
    res.status(500).send(err);
  }
}
export const Load = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  try{
    const user = await userModel.where("id", id).fetch();
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }
}
export const Insert = async ( req: Request , res: Response  )=>{
  try{
    const user = await userModel.forge({...req.body})
    .save(null, {method: 'insert'})
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }  
}
export const Update = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  try{
    const user = await userModel.where("id", id).save(
      { ...req.body },
      { patch: true }
    );
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }
}
export const Delete = async ( req: Request , res: Response  )=>{
  const {id} = req.params;
  try{
    const user = await userModel.where("id", id).destroy();
    res.status(200).json(user);
  }
  catch(err){
    res.status(500).send(err);
  }
}
