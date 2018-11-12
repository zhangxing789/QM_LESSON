// 云函数入口文件
const cloud = require('wx-server-sdk')
const queryString = require('querystring')
const request = require('request')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    let { code } = event;
    let id = 'wxf3a01aa1170c88cc';
    let secretKey = 'f4afc453f753efa5d50bb2ef33e4a432';
    const data = {
        appid: id,
        secret: secretKey,
        js_code: code,
        grant_type: 'authorization_code'
    }
    let url = `https://api.weixin.qq.com/sns/jscode2session?${queryString.stringify(data)}`
    console.log(url);
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, body) => {
            if (error || response.statusCode !== 200) {
                reject(error)
            } else {
                try {
                    console.log(body);
                    const r = JSON.parse(body);
                    resolve(r);
                } catch (e) {
                    reject(e)
                }
            }
        });
    })
}