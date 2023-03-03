<template>
  <div>
      <el-card class="swiper-container">
          <!-- 内部？ slot 区域  -->
          <!-- 定制卡片内容 slot -->
          <!-- id 选择器 NO  名字叫header 具名slot  -->
          <template #header>
              <div class="header">
                  <el-button type="primary" @click="addSwiper" :icon="Plus">增加</el-button>
                  <!-- 自定义事件 子组件通过这个函数向父组件汇报 -->
                  <el-popconfirm
                      title="确定要删除吗？"
                      confirmButtonText='确定'
                      cancelButtonText='取消'
                      @confirm="handleDelete"
                  >
                      <!-- slot 部分 -->
                      <template #reference>
                          <el-button type="danger" :icon="Delete">批量删除</el-button>
                      </template>
                  </el-popconfirm>
              </div>
          </template>
          <!-- 默认 slot  不用template   -->
          <!-- 无比强大 
              请求时， loading 效果做出来
          -->
          <el-table
              :load="state.loading"
              :data="state.tableData"
              tooltip-effect="dark"
              style="width:100%"
              ref="multipleTable"
          >
              <el-table-column
                  type="selection"
                  width="55"
              >
              </el-table-column>
              <el-table-column
                  label="轮播图"
                  width="200"
              >
                  <template #default="scope">
                      <img :src="scope.row.carouselUrl" alt="">
                  </template>
              </el-table-column>
              <el-table-column
                  label="跳转链接"
                  width="120"
                  >
                  <!-- #  slot  name=? default prop scope -->
                  <template #default="scope">
                      <a href="_blank" :href="scope.row.redirectUrl">
                          {{scope.row.redirectUrl}}
                      </a>
                  </template>
              </el-table-column>
              <el-table-column
                  prop="carouselRank"
                  label="排序值"
                  width="120">
              </el-table-column>
              <el-table-column
                  prop="createTime"
                  label="添加时间"
                  width="200"
              >
              </el-table-column>
              <el-table-column
                  fixed="right"
                  label="操作"
                  width="200"
              >
                  <template #default="scope">
                      <a style="margin-right:10px;"
                      @click.prevent="handleEdit(scope.row.carouselId)">修改</a>
                      <a @click.prevent="handleEdit(scope.row.carouselId)">删除</a>
                  </template>
              </el-table-column>
          </el-table>
          <el-pagination
              background
              layout="prev, pager, next"
              :total="state.total"
              :page-size="state.pageSize"
              :current-page="state.currentPage"
              @current-change="changePage"
          >
          </el-pagination>
      </el-card>
      <el-dialog
        v-model="state.showDialog"
        title="添加轮播图"
        width="400px"
      >
        <el-form 
            :model="state.swiperForm"
            :rules="state.rules"
            ref="formRef"
            label-width="100px"
            class="goods-form"
        >
          <el-form-item label="图片" prop="url">
              <el-upload
                class="avatar-uploader"
                :action="state.uploadImgServer"
                accpet="jpg,jpeg,png"
                :headers="{token:state.token}"
                :on-success="handleUrlSuccess"
              >
                <img 
                    :src="state.swiperForm.url" 
                    class="avatar"
                    v-if="state.swiperForm.url"
                    style="width: 200px;height: 100px;border: 1px solid #e9e9e9;"
                    >
                <el-icon v-else class="avatar-uploader-icon">
                    <Plus></Plus>
                </el-icon>
              </el-upload>
          </el-form-item>
          <el-form-item label="跳转链接" prop="link">
              <el-input type="text" v-model="state.swiperForm.link"></el-input>
          </el-form-item>
          <el-form-item label="排序值" prop="sort">
              <el-input type="number" v-model="state.swiperForm.sort"></el-input>
          </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="state.showDialog=false">取消</el-button>
                <el-button type="primary" @click="submitForm">确认</el-button>
            </span>
        </template>
      </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'
import { getSwiper, addSwiperData } from '@/service/swiper.js'
import { getLocal } from '@/utils/index.js'
import { ElMessage } from 'element-plus'

const multipleTable = ref(null)
const formRef = ref(null)

const state = reactive({
  token: getLocal('token'),
  uploadImgServer: 'http://backend-api-02.newbee.ltd/manage-api/v1/upload/files',
  load: true,
  tableData: [], // 数据列表 
  currentPage: 1,
  pageSize: 10,
  total: 0,
  showDialog: false,
  swiperForm: {
      url: '',
      link: '',
      sort: ''
  },
  rules: {
      url: [
        {required: true, message: '图片不能为空', trigger: ['change'],
        pattern: /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/}
      ],
      link: [
        {required: true, message: '跳转链接不能为空', trigger: ['blur'], 
          pattern: /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
      }
      ],
      sort: [
        {required: true, message: '排序不能为空', trigger: ['blur']}
      ]
      
  }
})

const submitForm = () => {
    console.log(formRef.value,'???');
    formRef.value.validate(async (valid) => {
      if (valid) {
          await addSwiperData({
              carouselUrl: state.swiperForm.url[0],
              redirectUrl: state.swiperForm.link,
              carouselRank: state.swiperForm.sort
          })
          ElMessage.success('添加成功')
          state.showDialog = false
          fetchSwiper()
      }
    })
}

const handleUrlSuccess = (data) => {
    // console.log(data,'///')
    state.swiperForm.url = data.data || ''
}

const addSwiper = () => {
    state.showDialog = true
}

const handleDelete = () => {

}

const changePage = (page) => {
  console.log(page, '---------')
  state.currentPage = page
  fetchSwiper()
}

const fetchSwiper = async () => {
  state.loading = true
  const { data } = await getSwiper({
      params: {
          pageNumber: state.currentPage,
          pageSize: state.pageSize
      }
  })
  // console.log(data)
  state.tableData = data.list
  state.total = data.totalCount
  state.currentPage = data.currPage
  state.loading = false
}

onMounted(() => {
  fetchSwiper()
  // console.log(multipleTable)
})
</script>

<style lang="stylus" scoped>
img
  width 100px
  height 100px

.avatar-uploader
  width 100px
  height 100px
  color #ddd
  font-size 30px
  .el-upload
    width 100%
    text-align center
  .avatar-uploader-icon
    display block
    width 100%
    height 100%
    border 1px solid #e9e9e9
    padding 32px 17px
</style>