import * as express from "express";
import mongoose from 'mongoose';
import User from '../models/user';

export const userRoute = (app: express.Application) => {
    app.route('/users/:id?')
        .get(async (req, res) => {
            const id = req.params.id
            if (id) {
                User.findById(id).lean().then((user) => {
                    if (user) {
                        return res.status(200).json({
                            users: user
                        })
                    }
                    else {
                        return res.status(500).json({
                            message: 'Nenhum usuario encontrado',
                        })
                    }
                }).catch((error) => {
                    return res.status(500).json({
                        message: 'Erro no nosso sistema encontrado',
                        error: error
                    })
                })
            }
            else {
                User.find().exec().then((users) => {
                    if (users) {
                        return res.status(200).json({
                            message: 'Todos os usuarios',
                            users: users,
                            count: users.length
                        })
                    }
                    else {
                        return res.status(500).json({
                            message: 'Nenhum usuario cadastrado',
                        })
                    }
                })
                    .catch((error) => {
                        return res.status(500).json({
                            message: 'Erro ao listar usuarios',
                            error: error
                        })
                    })
            }
        })
        .post(async (req, res) => {
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                birthDate: req.body.birthDate
            })
            user.save().then((result) => {
                return res.status(201).json({
                    message: 'Usuario criado com sucesso',
                    user: result
                })
            }).catch((error) => {
                return res.status(500).json({
                    message: 'Erro ao criar um novo usuario',
                    error: error
                })
            })
        })
        .put(async (req, res) => {
            const id = req.params.id
            if (id) {
                const updates = req.body
                User.findByIdAndUpdate(id, updates).then(() => {
                    return res.status(200).json({
                        message: 'Usuario alterado com sucesso'
                    })
                }).catch((error) => {
                    return res.status(500).json({
                        message: 'Erro ao alterar o usuario',
                        error
                    })
                })
            }
            else {
                return res.status(500).json({
                    message: 'Nenhum usuario passado para alterar'
                })
            }
        })
        .delete(async (req, res) => {
            const id = req.params.id
            if (id) {
                User.findByIdAndDelete(id).then((user) => {
                    if (user) {
                        return res.status(200).json({
                            message: 'Usuario deletado com sucesso'
                        })
                    }
                    else {
                        return res.status(500).json({
                            message: 'Usuario inexistente'
                        })
                    }
                }).catch((error) => {
                    return res.status(500).json({
                        message: 'Erro ao deletar o usuario',
                        error
                    })
                })
            }
            else {
                return res.status(500).json({
                    message: 'Nenhum usuario passado para deletar'
                })
            }
        })
}