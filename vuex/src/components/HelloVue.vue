<template>
  <div>
    <h3 style="color:red">{{test}}</h3>
    <h1>{{$store.state.counter}}</h1>
    <h3 style="color:red">{{$store.state.info}}</h3>
    <button @click="UpdateInfo">update</button>
    <h3>-----modules测试-----</h3>
    <h3>姓名:{{$store.state.a.name}}</h3>
    <h3>{{$store.getters.fullname1}}</h3>
    <h3>{{$store.getters.fullname2}}</h3>
    <h3>{{$store.getters.fullname3}}</h3>
    <h3>
      要更改成:
      <input type="text" value v-model="updatedname" />
      <button @click="btnClick">确定提交</button>
      <button @click="btnClick2">异步提交</button>
    </h3>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      updatedname: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    UpdateInfo() {
      // this.$store.commit("Update");
      this.$store
        .dispatch("aUpdate", { message: "我是对象", tag: "user" })
        .then(res => console.log(res));
    },
    test() {
      return 1;
    },
    btnClick() {
      const name = this.updatedname;
      this.$store.commit("mUpdateInfo", name);
    },
    btnClick2() {
      const name = this.updatedname;
      this.$store.dispatch("masyncUpdateInfo", name);
    }
  }
};
</script>
<style>
</style>