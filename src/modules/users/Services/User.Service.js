import { AppError} from "../../../utils/Error.Handler.js";
import UserModel from "../models/user.model.js";

export const GetUsersData = async (req, res) => {
   
    const FoundUser = await UserModel.find()
    
    if (FoundUser) {
        res.status(201).send(FoundUser);
    }

    throw new AppError('User not found', 404);
};





export const CreateUsersData = async (req, res) => {
    const { firstName, lastName, email } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
        throw new AppError('User already exists', 409);
    }

    // Create a new user
    const newUser = await UserModel.create({ firstName, lastName, email });
    
    // Send success response with the created user object
    res.status(201).send(newUser);
};




export const UsersData = async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, email } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne(_id);
    if (!existingUser) {
        throw new AppError('User not found', 404);
    }

    // Create a new user
    const UpdatedUser = await UserModel.updateOne(
      { firstName, lastName, email } 
      
    )
    // Send success response with the created user object
    res.status(201).send(UpdatedUser);
};

export const UpdateUsersData = async (req, res) => {
    const { _id } = req.params;
    const { firstName, lastName, email } = req.body;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne(_id);
    if (!existingUser) {
        throw new AppError('User not found', 404);
    }

    // Create a new user
    const UpdatedUser = await UserModel.updateOne(
      { firstName, lastName, email } 
      
    )
    // Send success response with the created user object
    res.status(201).send(UpdatedUser);
};


export const DeleteUsersData = async (req, res) => {
    const { _id } = req.params;

    // Check if a user with the same email already exists
    const existingUser = await UserModel.findOne(_id);
    if (!existingUser) {
        throw new AppError('User not found', 404);
    }

    // Create a new user
    const DeletedUser = await existingUser.deleteOne(      
    )
    // Send success response with the created user object
    res.status(201).send(DeletedUser);
};
