import BackTop from "components/content/backTop/BackTop";
export const backTopMixin = {
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },
    listenShow(positionY) {
      positionY > 550 ? (this.isBackTop = true) : (this.isBackTop = false);
    }
  },
  data() {
    return {
      isBackTop: false
    };
  }
};
