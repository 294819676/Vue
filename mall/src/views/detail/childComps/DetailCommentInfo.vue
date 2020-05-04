<template>
  <div v-if="Object.keys(commentInfo).length!==0" id="commentInfo">
    <div class="top">
      <span class="comment">用户评价</span>
      <span class="more">更多</span>
    </div>
    <div class="middle">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="bottom">
      <div>{{commentInfo.content}}</div>
      <div v-if="commentInfo.images!==0" class="info-images">
        <img :src="item" alt v-for="(item,index) in commentInfo.images" :key="index" />
      </div>
      <span class="time">{{commentInfo.created | showDate}}</span>
      <span class="style">{{commentInfo.style}}</span>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  data() {
    return {};
  },
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    showDate(value) {
      //第一步 将时间戳转化为Date对象
      const date = new Date(value * 1000);

      //第二步 将Date进行格式化
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>
<style scoped>
#commentInfo {
  font-size: 16px;
  padding: 0 10px;
  color: #333333;
}
.top {
  line-height: 50px;

  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}
.comment {
  font-size: 17px;
  flex: 1;
}
.middle {
  margin-top: 10px;
  display: flex;
  line-height: 50px;
}
.middle img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 50%;
}
.middle span {
  margin-left: 15px;
}
.bottom {
  margin-top: 6px;
}
.time,
.style {
  position: relative;
  top: 10px;
  font-size: 14px;
}
.style {
  left: 20px;
}
.bottom div img {
  margin-top: 4px;
  width: 80px;
  height: 80px;
  margin-right: 6px;
}
</style>