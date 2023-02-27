export default {
    // 商品存在购物车时
    addcount(state, payload) {
        payload.count += 1
    },
    
    // 商品不存在购物车时
    addCart(state, payload) {
        state.cartList.push(payload)
    }
}