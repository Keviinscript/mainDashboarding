require('dotenv').config()
const express = require('express') 
const ejs = require('ejs')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const session = require('express-session')

const accountSchema = require('./schema/accountSchema')
const pinSchema = require('./schema/pinSchema')
const transactionSchema = require('./schema/transactionSchema')
const userSchema = require('./schema/userSchema')


const secretkey = process.env.SECRETKEY

const mongodb = process.env.MONGODB
mongoose.connect(mongodb)
.then(() => {
   console.log('Connection successful')
}).catch((err) => {
    console.log(err, "Connection failed")
})

const app = express()
app.use('/assets', express.static('assets')) 
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())
app.use(
    session({
      resave: false,
      saveUninitialized: true,
      secret: 'secret',
    })
);

app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

function protectRoute(req, res, next){
    const token = req.cookies.logintoken
    try{
        const user = jwt.verify(token, secretkey)

        req.user = user
        // console.log(req.user)
        next()
    }
    catch(err){
        res.clearCookie('logintoken')
        return res.render('signIn')
    }
}


app.get('/signin', (req,res)=>{
    res.render('signIn')
})

app.post('/signin', async (req,res)=>{
    const loginInfo = req.body

    const email = loginInfo.email
    const password = loginInfo.password

    userSchema.findOne({email})
    .then((user)=>{
        userSchema.findOne({email: email}, (err,details)=>{
            if(!details){
                req.flash('danger','User not found!, Please try again')
                res.redirect('/')
            } else{
                bcrypt.compare(password, user.password, async (err,data)=>{
                    if(data){
                        const payload1 = {
                            user:{
                                email: user.email
                            }
                        }
                        const token1 = jwt.sign(payload1, secretkey,{
                            expiresIn: '3600s'
                        })

                        res.cookie('logintoken', token1, {
                            httpOnly: false
                        })

                        res.redirect('/')
                    } else{
                        req.flash('danger', 'Incorrect Password, Please Try Again!')
                        res.redirect('/signin')
                    }
                })
            }
        })
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/', protectRoute, (req,res)=>{
    res.render('index')
})

app.get('/profile',protectRoute, (req,res)=>{
    res.render('profile')
})

app.get('/cards', protectRoute, (req,res)=>{
    res.render('cards')
})

app.get('/transfer', protectRoute, (req,res)=>{
    res.render('transfer')
})

app.get('/imf', protectRoute, (req,res)=>{
    res.render('imf')
})
app.get('/otp',protectRoute, (req,res)=>{
    res.render('otp')
})
app.get('/tax',protectRoute, (req,res)=>{
    res.render('tax')
})

const port = process.env.PORT || 9000

app.listen(port, ()=>{
    console.log(`App started on port ${port}`)
} )
