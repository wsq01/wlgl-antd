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
                <a-button type="primary" icon="plus" @click="handleAdd">导出</a-button>
                <a-button type="primary" icon="plus" @click="handleAdd" style="margin-left: 8px">新建</a-button>
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
    title: '编号',
    dataIndex: 'gongsimingcheng',
    align: 'center',
    width: 80
  },
  {
    title: '品名',
    dataIndex: 'number',
    align: 'center',
    width: 80
  },
  {
    title: '规格',
    dataIndex: 'kehuleixing',
    align: 'center',
    width: 80
  },
  {
    title: '生产企业',
    dataIndex: 'duanxinbaojing',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '生产批号',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 100
  },
  {
    title: '所属机构',
    dataIndex: 'beizhu',
    align: 'center',
    width: 100
  },
  {
    title: '创建时间',
    dataIndex: 'beizhu',
    align: 'center',
    width: 120
  },
  {
    title: '备注',
    dataIndex: 'beizhu',
    align: 'center',
    width: 100
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
                gongsimingcheng: 'xxxx',
                number: '2222',
                beizhu: '那是一种内在的东西， 他们到达不了，也无法触及的',
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
