// import model Pos
const {Post} = require("../../models");

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        if (!posts){
            return res.status(400).send({
                status: "Data Post Empty",
                data: null,
            });
        }
        else{
            res.send({
                status: "Respon success",
                data: {
                    posts,
                }
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: {
                message: "Server error",
            }
        });
    }
}

exports.hidenFieldCreatedAtUpdatedAt = async (req, res) => {
    try {
        const posts = await Post.findAll({
            attributes: {
                exclude: ["createdAt","updatedAt"],
            },
        });
        if (!posts){
            return res.status(400).send({
                status: "Data Post Empty",
                data: null,
            });
        }
        else{
            res.send({
                status: "Respon success",
                message: "Hidden data on field created n field updatedAt successfully",
                data: {
                    posts,
                }
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: {
                message: "Server error",
            }
        });
    }
}

exports.getSinglePostById = async (req, res) => {
    const {id} = req.params;
    try {
        const post = await Post.findOne({
            where:{
                id,
            },
        });
        if(!post){
            return res.status(400).send({
                status: `Post with ID: ${id} not found`,
                data: null,
            });
        }
        else{
            res.send({
                status: "Respon success",
                message: `Get data by ID: ${id} data successfully`,
                data: {
                    data: null,
                },
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: {
                message: "Server error",
            }
        });
    }
}

exports.addPost = async (req, res) => {
    try {
        const {body} = req;
        const post = await Post.create(body)
        if(!post){
            return res.send({
                status: "Respon fail",
                data: "No data to send",
            });
        }
        else{
            res.send({
                status: "Response success",
                message: "Add data successfully",
                data: {
                    post,
                },
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            error: {
                message: "Server error",
            }
        });
    }
}

exports.function = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}