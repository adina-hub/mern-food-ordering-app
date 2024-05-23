import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response) => {
  try {
    const { auth0id } = req.body;

    //find user that has auth0id stored
    const existingUser = await User.findOne({ auth0id });

    if(existingUser){
      return res.status(200).send();
    } 

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser.toObject());

  } catch(error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" })
  }
};

export default { createCurrentUser };