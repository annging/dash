<template>
	<div class="main-content">
	  	<div class="left-container">
	    	<el-menu default-active="2" class="" mode="horizontal" router style="margin-bottom: 20px;">
		      	<el-menu-item index="1" :route="{path:'/merchant/index'}">商家列表</el-menu-item>
		      	<el-menu-item index="2" :route="{path:'/merchant/paid'}">付费商家列表</el-menu-item>
	    	</el-menu>
		    <el-row type="flex" class="filter-container"  style="margin-bottom: 20px;">
          <el-input
            v-model="listQuery.searchStr"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            size="small"
            class="filter-item"
            @keyup.enter.native="handleFilter" />
          <el-select size="small" v-model="listQuery.type" style="width: 200px" class="filter-item" @change="handleFilter">
            <el-option  label="全部付费商家" value="" />
            <el-option v-for="item in typeOptions" :key="item.key" :label="item.label" :value="item.key" />
          </el-select>
          <el-button size="small" class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
            搜索
          </el-button>
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
              label="头像"
              width="60">
              <template slot-scope="row">
                <img :src="row.avatar" style="width: 40px;height: 40px;">
              </template>
            </el-table-column>
            <el-table-column
              label="商家名称">
              <template slot-scope="{row}">
                <span>{{ row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="活动总数">
              <template slot-scope="{row}">
                <span>{{ row.activity.total }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="访问人数">
              <template slot-scope="{row}">
                <span>{{row.activity.fangwen}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="参与人数">
              <template slot-scope="{row}">
                <span>{{row.activity.canyu}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="累计收入">
              <template slot-scope="{row}">
                <span>{{row.account.incharge}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="门店数量">
              <template slot-scope="{row}">
                <span>{{row.stores}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="员工数量">
              <template slot-scope="{row}">
                <span>{{row.staffs}}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="会员"
              width="">
              <template slot-scope="{row}">
                <span>{{ row.level.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="会员状态">
              <template slot-scope="{row}">
                <el-tag size="mini">{{ row.level.status }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleView(scope.$index, scope.row)">查看</el-button>
                <!--<el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
              </template>
            </el-table-column>
          </el-table>
          <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
        </el-row>
      </div>
      <!--<div class="secondary-sidebar"></div>-->
  </div>
</template>

<script>
import { fetchList } from '@/api/merchant'
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
      typeOptions: [{ key: 1, label: 'vip商家' }, { key: 2, label: '旗舰版商家' }]
    };
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
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
    // 添加商家
    goCreate() {
      this.$router.push({ path: '/merchant/create' });
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
