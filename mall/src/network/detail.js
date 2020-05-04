import { request } from "./request";

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  });
}
export function getRecommend() {
  return request({
    url: "/recommend"
  });
}
export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.discountBgColor = itemInfo.discountBgColor;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.csells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
export class Params {
  constructor(itemParams) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.images = itemParams.info.images ? itemParams.info.images[0] : "";
    this.sizeChart = itemParams.rule.tables;
    this.set = itemParams.info.set;
  }
}
