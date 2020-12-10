// import model Pos
const { Post } = require("../../models");

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.findAll();
        if (!posts){
            return res.status(400).send({
                status: "Data Post Empty",
                data: [],
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