//implimented by sadasivan.
//model require
var model = require('../Model/M_data')
//packages require
var bcrypt = require('bcrypt');
var jsonwebtoken = require('jsonwebtoken');

module.exports = {

    //functionality for user registration
    user_registration: async (req, res) => {
        try {

            var name = req.body.name;
            var email = req.body.email;
            var password = req.body.password;
            var encrypt_pass = await bcrypt.hash(password, 5)

            if (!name) {
                return res.status(400).json({ "msg": "username is required" })
            }

            if (!email) {
                return res.status(400).json({ "msg": "email is required" })
            }

            if (!password) {
                return res.status(400).json({ "msg": "password is required" })
            }

            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Validate Email Format
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: "Invalid email format" });
            }
            //chcking users email exist or not in db
            var user_exist = await model.M_user_email_exist(email);


            // Use a for loop to check if the email already exists in the results
            for (let i = 0; i < user_exist.length; i++) {
                if (user_exist[i].email === email) {
                    return res.status(400).json({ "msg": "Email already exists" });
                }
            }



            var result = await model.M_user_reg(name, email, encrypt_pass)


            if (result != 0) {
                res.status(200).json({
                    "msg": 'registration successfully',
                    result
                })
            }
            else {
                res.status(400).json("msg:registration failed")
            }


        } catch (error) {
            console.log(error)
        }

    },



    //functionality for user login
    user_login: async (req, res) => {
        try {

            var email = req.body.email;
            var password = req.body.password;

            var results = await model.M_login(email);
            var pss = results[0].password;

            var token = jsonwebtoken.sign({ foo: 'bar' }, 'shhhhh');

            const match = await bcrypt.compare(password, pss);
            if (match) {
                res.json({
                    "msg": "login success",
                    "token": token
                })
            }
            else {
                res.json({ msg: "login failed" })
            }

        } catch (error) {
            console.log(error)
        }

    },





    //functionality for user details with blogs
    get_user_with_blogs: async (req, res) => {
        try {
            var id = req.body.user_id;

            var result = await model.M_get_user_with_blogs(id)
            if (result === 0) {
                res.status(400).json({
                    "msg": 'Failed.',

                })
            }
            else {
                res.status(200).json({
                    "msg": 'Success.',
                    result

                })
            }
        } catch (error) {
            console.log(error)
        }

    },

    //functionality for users blog creation
    create_blog: async (req, res) => {
        try {

            var title = req.body.title;
            var content = req.body.content;
            var author = req.body.author;
            var id = req.body.id;

            if (!title) {
                return res.status(400).json({ "msg": "title is required" })
            }


            if (!content) {
                return res.status(400).json({ "msg": "content is required" })
            }

            if (!author) {
                return res.status(400).json({ "msg": "title is author" })
            }


            var result = await model.M_create_blog(title, content, author, id)


            if (result === 1) {
                res.status(200).json({
                    "msg": 'Blog created successfully.',

                })
            }
            else {
                res.status(400).json({
                    "msg": 'Blog created failed.',
                    result
                })
            }

        } catch (error) {
            console.log(error)
        }
    },

    //functionality for users blog updation
    update_blog: async (req, res) => {
        try {
            column = req.body.column;
            value = req.body.value;
            id = req.body.user_id;


            if (!column || !value || !id) {
                return res.status(400).json({ error: 'Missing required fields' });
            }
            result = await model.M_update_blog(column, value, id)

            if (result === 1) {
                res.status(200).json({
                    "msg": 'Blog updated successfully.',

                })
            }
            else {
                res.status(400).json({
                    "msg": 'Blog updated Failed.',

                })
            }

        } catch (error) {
            console.log(error)
        }
    },



    //functionality for users blog deletion
    delete_blogs: async (req, res) => {
        try {
            var id = req.body.user_id;

            var result = await model.M_delete_blogs(id);
            if (result === 1) {
                res.status(200).json({
                    "msg": 'Blog deleted successfully.',
                })
            }
            else {
                res.status(200).json({
                    "msg": 'Blog deleted failed.',

                })
            }

        } catch (error) {
            console.log(error)
        }

    },


    //functionality for users published_blogs_list
    published_blogs_list: async (req, res) => {
        try {


            var result = await model.M_published_blogs_list();
            if (result === 0) {
                res.status(400).json({
                    "msg": 'Blog details is empty.',

                })
            }
            else {
                res.status(200).json({
                    "msg": 'Success.',
                    result

                })
            }

        } catch (error) {
            console.log(error)
        }

    },



    //functionality for users individual blogs_list
    individual_blog_post: async (req, res) => {

        try {


            var id = req.body.user_id;
            var result = await model.M_published_blogs_list(id);

            if (result === 0) {
                res.status(400).json({
                    "msg": 'Blog details is empty.',

                })
            }
            else {
                res.status(200).json({
                    "msg": 'Success.',
                    result

                })
            }

        } catch (error) {
            console.log(error)
        }
    }









}