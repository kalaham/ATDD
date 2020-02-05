const supertest = require('supertest');
const  test= require( "ava");
const app= require('../app')

/* 
Save user data: 
Given a user with his name and valid email
When the user send his data to the system 
Then the system must save the user data
*/

test('save valid data user', (t)=>{
    const user = { name:'jeison', email:'jeison@gamil.com'  }

    request(app)
        .post('/users')
        .expect('Content-Type',/json/)
        .expect(201)
        .end((err, res)=>{
            t.falsy(err, 'should not error')
        });

    // t.pass();
})