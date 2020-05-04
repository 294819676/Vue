<template>
  <div>{{ text }}</div>
</template>

<script>
import { request } from "../network/request";
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      text: ""
    };
  },
  created() {
    //方法一
    // request(
    //   {
    //     url: "/anything"
    //   },
    //   res => {
    //     console.log(res);
    //   },
    //   res => {
    //     console.log(res);
    //   }
    // );
    //方法二
    request({
      url: "/anything"
    })
      .then(res => {
        console.log(res);
      })
      .catch(res => {
        console.log(res);
      });
  },
  mounted() {}
};
</script>
<style></style>
