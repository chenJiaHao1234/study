export default {
    addcontent(context, payload) {
      
      let oldProduct = null
      for (let item of context.state.cartList) {
        // 判断传进来是 payload 是否存在cartList数组中
        if (item.iid === payload.iid) {
          oldProduct = item
        }
      }


      if(oldProduct) {
        // oldProduct的值不为 null时
        context.commit('addcount', oldProduct)
      } else {
        // oldProduct 的值为 null时
        context.commit('addCart', payload)
      }
    }
  }