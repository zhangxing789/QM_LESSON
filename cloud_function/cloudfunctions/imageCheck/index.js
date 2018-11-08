// 云函数入口文件
const AppId = '1257716841';
const SecretId = 'AKID51kGesahJjyzpRnAIEwc9VhiX8XiuU8d';
const SecretKey = 'ShjX9anltqYEhx284pMdjcGgrmSujOtC';
const cloud = require('wx-server-sdk')
const fs = require('fs');
const path = require('path');
const { ImageClient } = require('image-node-sdk');

cloud.init()

let imageClient = new ImageClient({AppId, SecretId, SecretKey});

// 云函数入口函数
exports.main = async (event, context) => {
    return await imageClient.imgPornDetect({
        formData: {
            //node 文件系统 fs rwd + ， path提供路径对象
            image: fs.createReadStream(path.join(__dirname, './test.jpg'))
        },
        header: {
            'content-type': 'multipart/form-data'
        }
    })
}