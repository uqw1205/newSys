import axios from 'axios'
import urls from './URLs'


const myAjax = axios.create({
    baseURL: urls.baseURL,
    method: "get",
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
        })
    },
    getBusiness(){
        return myAjax({
            url: urls.business
        })
    },
    getDetail(id){
        return myAjax({
            url: urls.detail + id
        })
    }
}
