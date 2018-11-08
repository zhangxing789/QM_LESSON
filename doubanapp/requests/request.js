import api from './api'
import util from '../utils/util'

function request (url, data, successCb, errorCb, completeCb) {
    wx.request({
        url,
        data,
        method: 'GET',
        success: (res) => {
            if (res,statusCode == 200 && util.isFunction(successCb))
            successCb(res.data);
        },
        error: () => {
            if (util.isFunction(errorCb))
            errorCb();
        },
        complete: () => {
            if (util.isFunction(completeCb))
            completeCb();
        }
    })
}

function requestSearchBook (data, successCb, errorCb, completeCb) {
    request(api.API_BOOK_SEARCH, data, successCb, errorCb, completeCb);
}

function requestBookDetail (id, data, successCb, errorCb, completeCb) {
    request(api.API_BOOK_DETAIL.replace(':id', id), data, successCb, errorCb, completeCb);
}

export default {
    requestSearchBook,
    requestBookDetail
}