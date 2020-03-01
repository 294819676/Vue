<template>
  <div id="app">
    <h3>-----测试一 方法:v-model-----</h3>输入筛选的年龄:
    <input type="text" v-model="test1" value />
    <h2>输入的值是:{{test1}}</h2>

    <h3>-----测试二 方法:ref-----</h3>
    <input type="text" ref="input1" />
    <h2>输入的值是:{{test2}}</h2>
    <button @click="GetInput">输出结果</button>

    <h2>-----App中内容-----</h2>
    <h2>counter:{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="add(5)">+5</button>
    <button @click="add(10)">+10</button>
    <h3>{{$store.getters.PowerCounter}}</h3>
    <h3>年龄大于15的球员信息:{{$store.getters.more15}}</h3>
    <h3>年龄大于{{test1}}的球员信息:{{$store.getters.morex(test1)}}</h3>
    <button @click="addStu">增加球员信息</button>
    <h2>-----HelloVue中内容-----</h2>
    <hello-vue></hello-vue>
  </div>
</template>

<script>
import HelloVue from "./components/HelloVue";
export default {
  name: "App",
  components: {
    HelloVue
  },
  data() {
    return {
      test1: "",
      test2: ""
    };
  },
  methods: {
    addition() {
      this.$store.commit("increment");
    },
    substraction() {
      this.$store.commit("decrement");
    },
    GetInput() {
      this.test2 = this.$refs.input1.value;
    },

    add(count) {
      //提交风格一
      // this.$store.commit("addCounter", count);
      // 提交风格二
      this.$store.commit({
        type: "addCounter",
        count
      });
    },
    addStu() {
      const info = { name: "Jordan", age: 40, height: 1.99 };
      this.$store.commit("addStudent", info);
    }
  },
  computed: {},
  created() {
    console.log(1);
  }
};
</script>

<style>
</style>
