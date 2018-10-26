//require + module.exports js 模块化标准, commotJS
//import from      export default  es6模块化标准 node6以下不支持
const cloud = require('wx-server-sdk');
const got = require('got');
cloud.init();
const db = cloud.database();


//async 同步 是函数修饰符，es7, 让异步代码同步化
exports.main = async () => {
    const photoInfos = [];
    const photos = await db.collection("photos").get();
    console.log(photos);
    for(let i = 0; i < photos.data.length; i++){
        const photo = photos.data[i];
        let openid = photo._openid;
        const user = await db.collection('userInfo')
        .where({
            _openid: openid
        }).get();
        if(user.data.length > 0) {
            photo.user = user.data[0]
        }
        photoInfos.push(photo);
    } 
    return photoInfos;


    //费时，异步的，但是想保持执行的顺序和阅读的顺序,
    /* 用户表 userInfo photos 图片
    
    const photos = [{
        _id:,
        _openid:,
        image:'',
        用户的信息
        user: {
            nickname: 'zx',
            provice: 'nc',
        }
    }] */
    


    /* let getResponse = await got('httpbin.org/get')
    console.log(getResponse);
    let postResponse = await got('httpbin.org/post',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: '这是标题',
            value: 123
        })
    })
    console.log(postResponse.body);
    //await 让我们的代码等一下 只有async 才可以用
    return postResponse.body*/
} 