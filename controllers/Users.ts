import { User } from "../models/Users";

export const getUser = async (req: any, res: any) => {
  try {
    const user = await User.findOne({username: req.body.username, password: req.body.password}) 
    if (user.username === req.body.username && user.password === req.body.password) {
      res.status(200).json({data: user});
    } 
  } catch (error) {
    console.error(error);
    res.status(404).json({user: 'not found'})
  }
}

export const createUser = async (req: any, res: any) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({email: email})
    if (existingUser && existingUser.email === email) {
      res.status(404).json({user: 'already exists'})
      return
    }
    const newUser = await User.create({ username, email, password})
    res.status(200).json({data: newUser, message: 'user created'})
  } catch(error) {
    console.error(error);
    res.status(404)
  }
}

export const updateUser = async (req:any, res: any) => {
  try {
    const { username, password, origin, destination, quantity, date, hour, state } = req.body;
    const data = {
      origin,
      destination,
      quantity,
      date,
      hour,
      state
    }
    const user = await User.findOneAndUpdate({username: username, password: password},
      {$push: {
        purchases: data
      }})
    res.status(200).json({userdata: user, message: 'updated'})
  } catch(error) {
    console.error(error);
    res.status(400)
  }
}

export const getPurchases = async (req: any, res: any) => {
  try {
    const user = await User.findOne({username: req.body.username, password: req.body.password})
    res.json(user.purchases)
    res.status(200)
  } catch(error) {
    console.error(error);
    res.status(400);
  }
}