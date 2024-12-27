//implimented by sadasivan.
//db require
var db = require('../util/database')


module.exports = {

    //functionality for user registration
    M_user_reg: async (name, email, password) => {
        try {

            var [query] = await db.query('INSERT INTO tb_users (name,email,password) VALUES (?,?,?)', [name, email, password])

            var ids = query.insertId;
            if (query.insertId > 0) {

                var [data] = await db.query('select name,email FROM tb_users where id = ?', ids)

                return data;
            }
            else {
                return 0;
            }
        } catch (error) {
            console.log(error)
        }


    },


    M_user_email_exist: async (email) => {
        try {

            var [query] = await db.query("SELECT email from tb_users")
            return query;

        } catch (error) {
            console.log(error)
        }
    },



    //functionality for user login
    M_login: async (email) => {
        try {
            var [query] = await db.query('select email,password from tb_users where email = ?', email)

            return query


        } catch (error) {
            console.log(error)
        }

    },




    //functionality for user details with blogs
    M_get_user_with_blogs: async (id) => {

        try {

            var [query] = await db.query(`SELECT a.name,a.email,b.blog_id,b.title,b.content,b.author
                from tb_users as a
                LEFT join tb_blog_management as b 
                on a.id = b.id where a.id = ?`, [id])


            if (query.length > 0) {
                return query;
            }
            else {
                return 0;
            }

        } catch (error) {
            console.log(error)
        }
    },

    //functionality for users blog creation
    M_create_blog: async (title, content, author, id) => {
        try {

            var [query] = await db.query('INSERT INTO tb_blog_management (title,content,author,id) VALUES (?, ?, ?, ?)', [title, content, author, id])

            if (query.insertId > 0) {
                return 1;
            }
            else {
                return 0;
            }
        } catch (error) {
            console.log(error)
        }
    },

    //functionality for users blog updation
    M_update_blog: async (column, value, id) => {
        try {

            var [result] = await db.query(` UPDATE tb_blog_management SET ${column} = ?  WHERE id = ?`, [value, id]);

            if (result.affectedRows > 0) {
                return 1;

            }
            else {
                return 0;
            }

        } catch (error) {
            console.log(error)
        }

    },


    //functionality for users blog deletion
    M_delete_blogs: async (id) => {
        try {
            var [query] = await db.query('DELETE FROM tb_blog_management WHERE id = ?', [id])
            console.log(query)

            if (query.affectedRows > 0) {
                return 1;
            }
            else {
                return 0;
            }

        } catch (error) {
            console.log(error)
        }
    },


    //functionality for users published_blogs_list
    M_published_blogs_list: async () => {


        var [query] = await db.query('SELECT blog_id,title,content,author FROM tb_blog_management')
        if (query.length > 0) {
            return query;
        }
        else {
            return 0;
        }
    },



    //functionality for users individual blogs_list
    M_individual_blog_post: async (id) => {
        try {
            var [query] = await db.query('SELECT blog_id,title,content,author FROM tb_blog_management WHERE id = ? ', [id])

            if (query.length > 0) {
                return query;
            }
            else {
                return 0;
            }


        } catch (error) {
            console.log(error)
        }
    }



}