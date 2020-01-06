<template>
  <div class="tap-wrap">
  	<router-link v-for="(item,index) in tagList" :key=""
      class="tap-item" :to='{path: item.path }'>{{item.title}}
      <i @click.prevent.stop="delTag(index)" class="el-icon-close"></i>
    </router-link>
  </div>
</template>

<script>
  export default {
    data: function(){
      return {
      	tagList: []
      }
    },
    methods: {
      addTag: function(newTag){
        //判断是否已存在
        let isExsit = this.tagList.some(item => {
          return item.path == newTag.fullPath
        })
        if(!isExsit) {
          this.tagList.push({
              title: newTag.meta.title,
              path: newTag.fullPath,
              name: newTag.matched[1].components.default.name
          })
        }
      },
      delTag: function(index) {
        //debugger;
        let tagList = this.tagList;
        //删除标签页
        tagList.splice(index,1);
        //切换路由
        //通过index删除标签项后，index会发生改变，
        //如果删除的是最后一个那么下标不会发生变化，删除的不是最后一个则该元素后续元素下标-1
        const item = this.tagList[index] ? this.tagList[index] : this.tagList[index - 1];
        console.log(item);
        if (item) {
            this.$router.push(item.path);
        }else{
            this.$router.push('/');
        }
      }
    },
    created(){
      this.addTag(this.$route);
    },
    watch: {
      //监听路由对象，并推入tag中
      $route(to, from){
        console.log(to);
        this.addTag(to);
      }
    },
  }
</script>

<style>
  .tap-wrap {
  	display: flex;
  	/*justify-content: center;*/
  	align-items: center;
  	border-bottom: 1px solid #ddd;
    	box-shadow: 0 1px 2px #f2f2f2;
  	height: 50px;
  }
  .tap-item {
  	display: inline-block;
  	padding: 7px;
  	border-radius: 5px;
  	border: 1px solid #DDDDDD;
  	cursor: pointer;
  	font-size: 16px;
  	margin-left: 10px;
  }
  .el-icon-close {
  	margin-left: 5px;
  }
  .el-icon-close:hover{
  	border-radius: 50%;
  	background: #2C3E50;
  }
</style>
