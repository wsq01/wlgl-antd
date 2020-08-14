<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-row :gutter="24" type="flex" justify="space-between">
          <a-col :md="18" :sm="24">
            <a-form-model layout="inline" :model="queryParam">
              <a-form-model-item :colon="false">
                <a-select :default-value="columns[0].dataIndex" slot="label">
                  <a-select-option v-for="(item, index) in columns" :key="index" :value="item.dataIndex">{{item.title}}</a-select-option>
                </a-select>
                <a-input v-model="queryParam.value" placeholder="" class="table-page-search-input" />
              </a-form-model-item>
              <a-form-model-item>
                <span class="table-page-search-btns">
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button class="btn-right" @click="() => this.queryParam = {}">重置</a-button>
                </span>
              </a-form-model-item>
            </a-form-model>
          </a-col>
          <a-col :md="6" :sm="24">
            <span class="table-page-search-btns" style="float: right">
              <a-button class="btn-right" type="primary" icon="plus" @click="handleAdd">新增</a-button>
              <a-button v-if="selectedRowKeys.length > 0" class="btn-right" type="primary" icon="plus" @click="handleAdd">批量删除</a-button>
            </span>
          </a-col>
        </a-row>
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
            <a-button size="small" type="primary" @click="handleEdit(record)" class="table-action-btn">编辑</a-button>
            <a-button size="small" type="danger" @click="handleSub(record)" class="table-action-btn">删除</a-button>
          </template>
        </span>
      </s-table>
    </a-card>
  </page-header-wrapper>
</template>

<script>
import STable from '@/components/Table'
const columns = [
  {
    title: '部门名称',
    dataIndex: 'gongsimingcheng',
    align: 'center',
    width: 150
  },
  {
    title: '部门编码',
    dataIndex: 'number',
    align: 'center',
    width: 120
  },
  {
    title: '客户类型',
    dataIndex: 'kehuleixing',
    align: 'center',
    width: 90
  },
  {
    title: '短信报警',
    dataIndex: 'duanxinbaojing',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '短信剩余条数',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 120
  },
  {
    title: '备注',
    dataIndex: 'beizhu',
    align: 'center'
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 160,
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
                gongsimingcheng: '500359',
                number: '000380003',
                beizhu: '',
                kehuleixing: '0'
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
