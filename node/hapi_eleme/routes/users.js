const GROUP_NAME = 'users';
const axios = require('axios');
const Joi = require('joi');
const config = require('../config');
const models = require('../models');
const decryptData = require('../utils/decryped-data');

module.exports = [
    {
        method: 'POST',
        path: `/${GROUP_NAME}/wxLogin`,
        handler: async (req, reply) => {
            
            const appid = config.wxAppid;
            const secret = config.wxSecret;
            const { code, encryptedDate, iv } = req.payload;
            const response = await axios({
                url: 'https://api/wxapp.qq.com/sns/jscode2session',
                method: 'GET',
                params: {
                    appid,
                    secret,
                    js_code: code,
                    grant_type: 'authorization_code'
                }
            });
            const { openid, session_key: sessionKey } = response.data;
            console.log( openid, sessionKey );
            const user = await models.users.findOrCreate({
                where: { open_id: openid }
            });

            const userInfo = decryptData(encryptedDate, iv, sessionKey, appid);
            console.log(userInfo);
            await models.users.update({
                nick_name: userInfo.nickName,
                gender: userInfo.gender,
                avatar_url: userInfo.avatarUrl,
                open_id: openid,
                session_key: sessionKey
            },{
                where: { open_id: openid }
            });
            reply('zx');
        },
        config: {
            tags: ['api', GROUP_NAME],
            validate: {
                payload: {
                    code: Joi.string().required().description('微信用户登录的临时code'),
                    encryptedDate: Joi.string().required().description('微信用户信息encryptedData'),
                    iv: Joi.string().required().description('微信用户信息iv')
                }
            }
        }
    }
];