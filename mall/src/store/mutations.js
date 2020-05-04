import { ADD_COUNT, ADD_TO_CART, CHECK_CHANGE } from "./mutation-types";
export default {
  // addCart(state, playload) {
  //   const oldProduct = state.cartList.find(function(item) {
  //     return item.iid === playload.iid;
  //   });
  //   if (oldProduct) {
  //     oldProduct.count += 1;
  //   } else {
  //     playload.count = 1;
  //     state.cartList.push(playload);
  //   }
  // }
  [ADD_TO_CART](state, playload) {
    state.cartList.push(playload);
  },
  [ADD_COUNT](state, playload) {
    playload.count++;
  },
  [CHECK_CHANGE](state, playload) {
    playload.isCheck = !playload.isCheck;
    console.log(playload.isCheck);
  },
  MSelectAll(state) {
    state.cartList.forEach(item => {
      item.isCheck = true;
    });
  },
  MSelectNone(state) {
    state.cartList.forEach(item => {
      item.isCheck = false;
    });
  },
  increaseCount(state, playload) {
    state.cartList.forEach(item => {
      if (item.iid == playload) item.count += 1;
    });
  },
  decraseCount(state, playload) {
    state.cartList.forEach(item => {
      if (item.iid == playload) item.count--;
    });
  }
};
