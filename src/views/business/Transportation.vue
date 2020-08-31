<template>
  <page-header-wrapper :title="false">
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-row :gutter="24" type="flex" justify="space-between">
          <a-col :md="13" :sm="24">
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
          <a-col :md="11" :sm="24">
            <span class="table-page-search-btns" style="float: right">
              <a-button class="btn-right" type="primary" icon="plus" @click="handleAdd">新增</a-button>
              <a-button class="btn-right" type="primary" icon="plus" @click="handleAdd">装车</a-button>
              <a-button class="btn-right" type="primary" icon="plus" @click="handleAdd">运达</a-button>
              <a-button class="btn-right" type="primary" icon="plus" @click="handleAdd">最优路线</a-button>
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
        :scroll="{ x: 1500 }"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
      >
        <span slot="serial" slot-scope="text, record, index">
          {{ index + 1 }}
        </span>
        <span slot="warning" slot-scope="text, record">
          {{record.baojingwendu_shangxian}}°C-{{record.baojingwendu_xiaxian}}°C
        </span>
        <span slot="temp" slot-scope="text, record">
          {{record.hegewendu_shangxian}}°C-{{record.hegewendu_xiaxian}}°C
        </span>
        <span slot="action" slot-scope="text, record">
          <template>
            <a-button size="small" type="primary" @click="handleEdit(record)" class="table-action-btn">详情</a-button>
            <a-button size="small" type="primary" @click="handleEdit(record)" class="table-action-btn">编辑</a-button>
            <a-popconfirm title="确定要删除吗？" @confirm="handleDelete(record)">
              <a-button size="small" type="danger" class="table-action-btn">删除</a-button>
            </a-popconfirm>
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
    title: '运输单号',
    dataIndex: 'danhao',
    align: 'center',
    width: 150
  },
  {
    title: '状态',
    dataIndex: 'state',
    align: 'center',
    width: 80
  },
  {
    title: '发货人',
    dataIndex: 'fahuoren',
    align: 'center',
    width: 80
  },
  {
    title: '收货人',
    dataIndex: 'shouhuoren',
    align: 'center',
    width: 80,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '品名',
    dataIndex: 'pinming',
    align: 'center',
    width: 120
  },
  {
    title: '报警温度区间',
    dataIndex: 'baojingwendu',
    align: 'center',
    width: 140,
    scopedSlots: { customRender: 'warning' }
  },
  {
    title: '合格温度区间',
    dataIndex: 'hegewendu',
    align: 'center',
    width: 150,
    scopedSlots: { customRender: 'temp' }
  },
  {
    title: '出发时间',
    dataIndex: 'createtime',
    align: 'center',
    width: 120
  },
  {
    title: '预计到达时间',
    dataIndex: 'yujidaodatime',
    align: 'center',
    width: 150
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: 280,
    align: 'center',
    fixed: 'right',
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
