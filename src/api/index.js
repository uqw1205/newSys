import axios from 'axios'
import urls from './URLs'


const myAjax = axios.create({
    baseURL: urls.baseURL,
    params: {}
})

export default {
    addOrder(data){
        return myAjax({
            url: urls.addOrder,
            params: {
                ...data
            }
        })
    },
    // 获取所有工单
    getOrder(page){
        return myAjax({
            url: urls.orderList,
            method: "get",
            params: {
                ...page
            }
        })
    },
    getBusiness(){
        return myAjax({
            url: urls.business,
            method: "get",
        })
    },
    // 工单详情
    getDetail(id){
        return myAjax({
            url: urls.detail + id,
            method: "get",
        })
    },
    // 回复工单
    replyOrder(data){
        return myAjax({
            url: urls.replyOrder,
            method: "POST",
            params: {
                ...data
            }
        })
    },
}
