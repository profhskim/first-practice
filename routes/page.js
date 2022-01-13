const express = require('express')

const router = express.Router()

router.use((req, res, next)=>{
    res.locals.user = null
    res.locals.followerCount = 0
    res.locals.followingCount = 0
    res.locals.followerIdList = []
    next()
})

router.get('/profile',(req, res)=>{
    res.render('profile',{title:'내 정보 - NodeBird'})
})

router.get('/join',(req, res)=>{
    res.render('join',{title:'회원가입 - NodeBird'})
})

router.get('/', (req, res, next)=>{
    const twits = []
    res.render('main', {
        title: 'NodeBird',
        twits,
    })
})

<<<<<<< HEAD
module.exports = router
// 페이지 추가 마스터
=======
// 신입생 추가
module.exports = router
>>>>>>> 83faf94f9800917bb2291a867790261ab2f88a06
