import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/user';

const creatUser = (req: Request, res: Response, next: NextFunction) => {
    let { firstName, lastName, email, password, birthDate} = req.body;

    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        birthDate: birthDate
     });

    return user
        .save()
        .then((result) => {
            return res.status(201).json({
                user: result
            })
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
     User.find()
        .exec()
        .then((users) => {
            return res.status(200).json({
                users: users,
                count: users.length
            })
        })
        .catch((error) => {
            return res.status(500).json({
                message: error.message,
                error
            })
        })
}

export default { creatUser, getAllUsers };