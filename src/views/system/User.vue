<template>
  <!-- <page-header-wrapper> -->
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="部门名称">
                <a-input v-model="queryParam.gongsimingcheng" placeholder="" />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
              </span>
            </a-col>
            <a-col :md="8" :sm="24">
              <span class="table-page-search-submitButtons" style="float: right">
                <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
                <a-button style="margin-left: 8px" v-if="selectedRowKeys.length > 0">批量删除</a-button>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <s-table
        ref="table"
        size="middle"
        :rowKey="row => row.id"
        :columns="columns"
        :data="loadData"
        :bordered="true"
        :alert="false"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="status" slot-scope="text">
          {{ text | statusFilter }}
        </span>
        <span slot="check">
          <a href="#">详情</a>
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a @click="handleSub(record)">删除</a>
          </template>
        </span>
      </s-table>
    </a-card>
  <!-- </page-header-wrapper> -->
</template>

<script>
import STable from '@/components/Table'
const columns = [
  {
    title: '登录名',
    dataIndex: 'admin_user',
    align: 'center',
    width: 150
  },
  {
    title: '用户名称',
    dataIndex: 'admin_real_name',
    align: 'center',
    width: 120
  },
  {
    title: '所属机构',
    dataIndex: 'suoshujigou',
    align: 'center',
    width: 90
  },
  {
    title: '机构名称',
    dataIndex: 'jigoumingcheng',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '邮箱',
    dataIndex: 'admin_mailbox',
    align: 'center',
    width: 120
  },
  {
    title: '手机号',
    dataIndex: 'admin_mobile',
    align: 'center',
    width: 120
  },
  {
    title: '状态',
    dataIndex: 'shifoukeyong',
    align: 'center',
    width: 60,
    scopedSlots: { customRender: 'status' }
  },
  {
    title: '创建时间',
    dataIndex: 'createtime',
    align: 'center',
    width: 150
  },
  {
    title: '短信余量查看',
    dataIndex: 'check',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'check' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    align: 'center',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  components: {
    STable
  },
  data () {
    return {
      columns,
      loadData: parameter => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              data: [{
                id: 1,
                admin_user: 'xxxx',
                admin_real_name: '2222',
                shifoukeyong: 1,
                updatedAt: '2018-07-26 00:00:00'
              }
              ],
              pageSize: 10,
              pageNo: 0,
              totalPage: 1,
              totalCount: 1
            })
          })
        })
      },
      queryParam: {},
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (val) {
      console.log(val)
      return val === 1 ? '激活' : '禁止'
    }
  },
  methods: {
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleAdd () {

    }
  }
}
</script>

<style>

</style>
