//implimented by sadasivan.
var express = require('express');
var router = express.Router();
//require controller
var controller = require('../Controller/data')

//functionality for user registration
router.post('/user_registration', controller.user_registration);

//functionality for user login
router.post('/user_login', controller.user_login);

//functionality for user details with blogs
router.post('/get_user_with_blogs', controller.get_user_with_blogs);

//functionality for users blog creation
router.post('/create_blog', controller.create_blog);

//functionality for users blog updation
router.post('/update_blog', controller.update_blog);

//functionality for users blog deletion
router.post('/delete_blog', controller.delete_blogs);

//functionality for users published_blogs_list
router.post('/published_blogs_list', controller.published_blogs_list);

//functionality for users individual blogs_list
router.post('/individual_blog_post', controller.individual_blog_post);


module.exports = router;
