<template>
  <div class="container">
    <page-header-wrapper :title="false">
      <a-card :bordered="false">
        <div class="table-page-search-wrapper">
          <a-row :gutter="24" type="flex" justify="space-between">
            <a-col :md="18" :sm="24">
              <a-form-model layout="inline" :model="queryParam">
                <a-form-model-item :colon="false">
                  <a-select :default-value="columns[0].dataIndex" slot="label">
                    <template v-for="(item, index) in columns">
                    <a-select-option v-if="index === 0 || index === 1 || index === 2" :key="index" :value="item.dataIndex">{{item.title}}</a-select-option>
                  </template>
                  </a-select>
                  <a-input v-model="queryParam.value" placeholder="" class="table-page-search-input" />
                </a-form-model-item>
                <a-form-model-item>
                  <a-space>
                    <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                    <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                  </a-space>
                </a-form-model-item>
              </a-form-model>
            </a-col>
            <a-col :md="6" :sm="24">
              <span class="table-page-search-btns" style="float: right">
                <a-button style="margin-left: 8px" type="primary" icon="plus" @click="handleAdd">新增</a-button>
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
              <a-popconfirm title="确定要删除吗？" @confirm="handleDelete(record)">
                <a-button size="small" type="danger" class="table-action-btn">删除</a-button>
              </a-popconfirm>
            </template>
          </span>
        </s-table>
      </a-card>
      <div class="tree-icon" @click="bindClickTreeIcon">
        <a-icon type="cluster" />
      </div>
    </page-header-wrapper>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="isShowDrawer"
      :after-visible-change="afterVisibleChange"
      @close="bindCloseDrawer"
    >
      <a-tree></a-tree>
    </a-drawer>
  </div>
</template>

<script>
import STable from '@/components/Table'
const columns = [
  {
    title: '库区编码',
    dataIndex: 'gongsimingcheng',
    align: 'center',
    width: 150
  },
  {
    title: '库区名称',
    dataIndex: 'number',
    align: 'center',
    width: 120
  },
  {
    title: '负责人',
    dataIndex: 'kehuleixing',
    align: 'center',
    width: 90
  },
  {
    title: '联系电话',
    dataIndex: 'duanxinbaojing',
    align: 'center',
    width: 100,
    scopedSlots: { customRender: 'duanxinbaojing' }
  },
  {
    title: '描述',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 120
  },
  {
    title: '创建时间',
    dataIndex: 'duanxingshengyushuliang',
    align: 'center',
    width: 120
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
      selectedRows: [],
      isShowDrawer: false
    }
  },
  methods: {
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    bindClickTreeIcon () {
      this.isShowDrawer = !this.isShowDrawer
    },
    bindCloseDrawer () {
      this.isShowDrawer = !this.isShowDrawer
    },
    handleAdd () {

    }
  }
}
</script>

<style lang="less" scoped>
.container {
  position: relative;
}
.tree-icon {
  position: fixed;
  z-index: 10;
  top: 340px;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  font-size: 16px;
  text-align: center;
  background: #1890ff;
  color: #fff;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  pointer-events: auto;
}
</style>
