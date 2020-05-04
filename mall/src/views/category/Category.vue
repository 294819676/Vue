<template>
  <div id="category">
    <category-nav-bar />
    <tab-control
      :titles="['综合','新品','销量']"
      class="tab-control"
      @tabClick="tabClick"
      v-show="isFixed"
      ref="tab1"
    />
    <div class="content">
      <div>
        <tab-menu :categories="categories" @selectItem="selectItem" />
      </div>
      <div>
        <scroll id="tab-scroll" ref="scroll" @scroll="contentScroll" :probeType="3">
          <tab-content-category :subCategories="showSubCategory" />
          <tab-control :titles="['综合','新品','销量']" @tabClick="tabClick" ref="tab2" />
          <tab-content-detail :categoryDetail="showCategoryDetail" @imageLoad="imageLoad" />
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryNavBar from "./childComps/CategoryNavBar";
import TabMenu from "./childComps/TabMenu";
import TabContentCategory from "./childComps/TabContentCategory";
import tabControl from "components/content/tabControl/TabControl";
import TabContentDetail from "./childComps/TabContentDetail";

import {
  getCategory,
  getSubcategory,
  getCategoryDetail
} from "network/category";
import _ from "lodash";
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType: "pop",
      isFixed: false,
      saveY: 500,
      refs: Object
    };
  },
  components: {
    CategoryNavBar,
    TabMenu,
    TabContentCategory,
    tabControl,
    TabContentDetail,
    Scroll
  },
  created() {
    this.getCategory();
    this.getTab2Y();
  },
  updated() {},
  mounted() {},
  methods: {
    getCategory() {
      getCategory().then(res => {
        //1.获取分类数据
        this.categories = res.data.category.list;
        //2.初始化每个类别的子数据
        for (let i = 0; i < this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              sell: [],
              new: []
            }
          };
        }
        //3.请求第一个分类的数据
        this._getSubcategory(0);
      });
    },
    _getSubcategory(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
      });
      this._getCategoryDetail("pop");
      this._getCategoryDetail("sell");
      this._getCategoryDetail("new");
    },
    _getCategoryDetail(type) {
      // 1.获取请求的miniWallkey
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      // 2.发送请求,传入miniWallkey和type
      getCategoryDetail(miniWallkey, type)
        .then(res => {
          // 3.将获取的数据保存下来
          this.categoryData[this.currentIndex].categoryDetail[type] = res;
          this.categoryData = { ...this.categoryData };
        })
        .catch(error => {
          console.log(error);
        });
    },
    //事件监听方法
    selectItem(index) {
      this._getSubcategory(index);
      this.getTab2Y(); //选择分类时需要重新获取saveY的值
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
        default:
          break;
      }
    },
    imageLoad: _.debounce(function() {
      this.$refs.scroll.refresh();
    }, 20),
    getTab2Y() {
      setTimeout(() => {
        this.saveY = this.$refs.tab2.$el.offsetTop;
      }, 1000);
    },
    contentScroll(position) {
      this.isFixed = -position.y > this.saveY;
    }
  },
  computed: {
    showSubCategory() {
      if (this.currentIndex == -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex == -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  }
};
</script>
<style scoped>
#category {
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
}
#tab-scroll {
  height: 100%;
  flex: 1;
}
.tab-control {
  width: calc(100% - 100px);
  position: relative;
  left: 100px;
  top: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;
  /* position: sticky; */
}
</style>
