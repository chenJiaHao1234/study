import { request2 } from './request'

export function getDetail(iid) {
    // http://152.136.185.210:7878/api/hy66/detail/iid
    return request2({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function recommend() {
    return  request2({
        url: '/recommend'
    })
}

// 封装类的作用：用于集合存储
// 格式
// class Person {
//     constructor(name, age) {
//         this.name = name,
//         this.age = age
//     }
// }
// const p = new Person('name', age)

// 整合的商品信息
export class GoodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.discountBgColor = itemInfo.discountBgColor
        this.lowNowPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = services
    }
}

// 整合的商家信息
export class shopInfo {
    constructor(shopInfo) {
        this.score = shopInfo.score
        this.shopLogo = shopInfo.shopLogo
        this.cGoods = shopInfo.cGoods
        this.cSells = shopInfo.cSells
        this.name = shopInfo.name
    }
}

// 整合的评论信息
export class commentInfo {
    constructor(list) {
        this.uname = list[0].user.uname
        this.content = list[0].content
        this.created = list[0].created
        this.style = list[0].style
    }
}