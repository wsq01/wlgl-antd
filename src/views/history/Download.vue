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
                <a-input v-model="queryParam.value" placeholder="" style="width: 200px" />
              </a-form-model-item>
              <a-form-model-item>
                <span class="table-page-search-btns">
                  <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                  <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                </span>
              </a-form-model-item>
            </a-form-model>
          </a-col>
          <a-col :md="6" :sm="24">
            <span class="table-page-search-btns" style="float: right">
              <a-button type="primary" icon="plus" @click="handleAdd">导出</a-button>
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
  </page-header-wrapper>
</template>

<script>
import STable from '@/components/Table'
const columns = [
  {
    title: '文件编号',
    dataIndex: 'gongsimingcheng',
    align: 'center',
    width: 150
  },
  {
    title: '设备编号',
    dataIndex: 'number',
    align: 'center',
    width: 120
  },
  {
    title: '运单编号',
    dataIndex: 'kehuleixing',
    align: 'center',
    width: 90
  },
  {
    title: '下载地址',
    dataIndex: 'duanxinbaojing',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '操作时间',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 120
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
      queryParam: {}
    }
  },
  methods: {
    handleAdd () {

    }
  }
}
</script>

<style>

</style>
