<template>
  <page-header-wrapper :title="false">
    <div class="ant-pro-pages-list-applications-filterCardList">
      <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }" style="margin-top: 24px;">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card :body-style="{ paddingBottom: 20 }" hoverable>
            <a-card-meta :title="item.title">
              <template slot="avatar">
                <a-avatar size="small" :src="item.avatar"/>
              </template>
            </a-card-meta>
            <template slot="actions">
              <a-tooltip title="下载">
                <a-icon type="download" />
              </a-tooltip>
              <a-tooltip title="编辑">
                <a-icon type="edit" />
              </a-tooltip>
              <a-tooltip title="分享">
                <a-icon type="share-alt" />
              </a-tooltip>
              <a-dropdown>
                <a class="ant-dropdown-link">
                  <a-icon type="ellipsis" />
                </a>
                <a-menu slot="overlay">
                  <a-menu-item>
                    <a href="javascript:;">1st menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">2nd menu item</a>
                  </a-menu-item>
                  <a-menu-item>
                    <a href="javascript:;">3rd menu item</a>
                  </a-menu-item>
                </a-menu>
              </a-dropdown>
            </template>
            <div class="">
              <card-info active-user="100" new-user="999"></card-info>
            </div>
          </a-card>
        </a-list-item>
      </a-list>
    </div>
  </page-header-wrapper>
</template>

<script>
export default {

}
</script>

<style>

</style>
