<template>
	<div class="main-content">
	  	<div class="left-container">
	    	<el-menu default-active="2" class="" mode="horizontal" router style="margin-bottom: 20px;">
		      	<el-menu-item index="1" :route="{path:'/account/tixianshenhe/tixiandaishenhe'}">待审核</el-menu-item>
            <el-menu-item index="2" :route="{path:'/account/tixianshenhe/yitongguo'}">提现记录</el-menu-item>
	    	</el-menu>
		    <el-row type="flex" class="filter-container"  style="margin-bottom: 20px;">
          <el-input
            v-model="listQuery.searchStr"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="small"
            class="filter-item"
            @keyup.enter.native="handleFilter" />
        </el-row>
        <el-row class="list">
          <el-table
            v-loading="listLoading"
            :data="list"
            border
            fit
            highlight-current-row
            style="width: 100%"
            size="small"
            :header-cell-style="{
              'background-color': '#f7f9fa',
              'color': '#637282;'
            }"
            @sort-change="sortChange"
            >
            <el-table-column
              prop="id"
              label="ID"
              sortable
              width="60">
              <template slot-scope="{row}">
                <span>{{ row.id }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="商家名称">
              <template slot-scope="{row}">
                <span>{{ row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="提现金额(元)">
              <template slot-scope="{row}">
                <span>500.00</span>
              </template>
            </el-table-column>
            <el-table-column
              label="申请时间">
              <template slot-scope="{row}">
                <span>{{row.create_time}}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
              </template>
            </el-table-column>
          </el-table>
          <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
        </el-row>
        <el-dialog
          title="认证资料"
          :visible.sync="dialogVisible"
          width="45%"
          :modal-append-to-body="false"
          :append-to-body="true"
          :before-close="handleClose">
          <div class="rz-container">
            认证资料
          </div>
        </el-dialog>
      </div>
      <!--<div class="secondary-sidebar"></div>-->
  </div>
</template>

<script>
import { fetchMerchantRzList} from '@/api/merchant'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

export default {
  components: { Pagination },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        searchStr: '',
        page: 1,
        limit: 20,
        sort: '+id',
        type: ''
      },
      dialogVisible: false,
      renzheng: {
        authInfo: '',
        authType: 1, // 认证类型 1 个人认证, 2 企业认证
        merchantId: 0
      }
    };
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchMerchantRzList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    // 查看商家认证资料
    handleView(index, row) {
      //to do 获取商家认证资料
      /*fetchMerchantRz(row.id).then(response => {
        this.renzheng = response.data
      })*/
      this.dialogVisible = true
    },
    handleClose(done) {
      console.log('关闭弹窗');
      done();
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    display: -webkit-box;
    display: flex;

    >div:last-child {
      margin-right: 40px;
    }
  }
  .secondary-sidebar {
    outline: none;
    -webkit-box-flex: 0;
    flex: 0 0 240px;
  }
  .left-container {
    position: relative;
    z-index: 1;
    -webkit-box-flex: 1;
    flex: 1;
    min-width: 420px;
    margin-left: 30px;
    outline: none;
  }
  .el-menu-item {
    height: 37px;
    line-height: 39px;
    padding: 0;
    margin-right: 20px;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 1px solid #000;
    color: #303133;
  }
  .filter-item {
    margin-right: 10px;
  }
</style>
