<template>
  <div>

  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="text">文字按钮</el-button>

  </div>
</template>

<script>

export default {
  data () {
    return {

      dialogVisible: false, // 弹窗显示bool
      dialogType: 'New',
      pageSize: 5, // 每页数量
      currentPage: 1,
      tableData: []

    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {

    },
    // 编辑和添加通过 弹窗
    handleAdd () {
      this.dialogType = 'New'
      this.dialogVisible = true
    },
    async confirmEntity () {
    },
    currentChange (e) {
      this.currentPage = e
    },
    handleSizeChange (val) {
      console.log(val)
      this.pageSize = val
    }
  }
}
</script>
