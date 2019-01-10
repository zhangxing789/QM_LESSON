const inert = require('inert'); // hapi 静态文件或目录
const vision = require('vision'); // hapi 专用模版显示npm
const packageModule = require('package'); // 拿到package.json 里的一些数据项
const hapiSwagger = require('hapi-swagger'); 


module.exports = [
    inert,
    vision,
    {
        register: hapiSwagger,
        options: {
            info: {
                title: '接口文档',
                version: packageModule.version
            },
            grouping: 'tags',
            tags: [
                { name: 'tests', description: '测试相关'}
            ]
            
        }
    }
];
