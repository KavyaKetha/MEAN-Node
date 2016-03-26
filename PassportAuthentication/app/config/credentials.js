/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


module.exports = {

    'facebookAuth' : {
        'clientID'      : '1436894253272712', // your App ID
        'clientSecret'  : 'b5d2ce908a09757a85a23a0361775db6', // your App Secret
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'

    },

    'twitterAuth' : {
        'consumerKey'       : 'ftJYjGybY2faK4hE8NCYiizf9',
        'consumerSecret'    : 'ihakpvqwnIrIQmmbtGgkzyT6ZtXUdrlGjP0GEMTS9Pq3whEUMw',
        'callbackURL'       : 'http://127.0.0.1:3000/auth/twitter/callback'

    },

    'googleAuth' : {
        'clientID'      : '704143608287-nke75kah5l02f0gut78loocj70v4i17v.apps.googleusercontent.com',
        'clientSecret'  : 'M6W8F001hFpzFbEu71Sm2DxB',
        'callbackURL'   : 'http://127.0.0.1:3000/auth/google/callback'

    }

};
