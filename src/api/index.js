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
    getOrder(){
        return myAjax({
            url: urls.orderList,
            method: "get",
        })
    },
    getBusiness(){
        return myAjax({
            url: urls.business,
            method: "get",
        })
    },
    getDetail(id){
        return myAjax({
            url: urls.detail + id,
            method: "get",
        })
    },
    replyOrder(data){
        return myAjax({
            url: urls.replyOrder,
            method: "post",
            params: {
                ...data
            }
        })
    }
}
