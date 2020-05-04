import { ADD_COUNT, ADD_TO_CART, CHECK_CHANGE } from "./mutation-types";
export default {
  addCart(context, playload) {
    return new Promise((resolve, reject) => {
      const oldProduct = context.state.cartList.find(item => {
        return item.iid == playload.iid;
      });
      if (oldProduct) {
        context.commit(ADD_COUNT, oldProduct);
        resolve("商品数量+1");
      } else {
        playload.count = 1;
        playload.isCheck = true;
        context.commit(ADD_TO_CART, playload);
        resolve("购物车添加成功");
      }
    });
  },
  CheckClick(content, playload) {
    const cartItem = content.state.cartList.find(item => {
      return item.iid == playload;
    });
    content.commit(CHECK_CHANGE, cartItem);
  },
  SelectAll(content) {
    content.commit("MSelectAll");
  },
  SelectNone(content) {
    content.commit("MSelectNone");
  }
};
