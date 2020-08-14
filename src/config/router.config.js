import BasicLayout from '@/layouts/BasicLayout'
import UserLayout from '@/layouts/UserLayout'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    redirect: '/dashboard',
    meta: {
      title: 'menu.home'
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          title: '首页',
          icon: 'home'
        },
        component: () => import('@/views/Dashboard')
      },
      {
        path: '/system',
        name: 'system',
        meta: {
          title: '系统设置',
          icon: 'setting'
        },
        component: RouteView,
        children: [
          {
            path: '/system/department',
            name: 'department',
            meta: {
              title: '部门管理'
            },
            component: () => import('@/views/system/Department')
          },
          {
            path: '/system/user',
            name: 'user',
            meta: {
              title: '用户管理'
            },
            component: () => import('@/views/system/User')
          }
        ]
      },
      {
        path: '/business',
        name: 'business',
        component: RouteView,
        redirect: '/business/device',
        meta: {
          title: '业务设置',
          icon: 'profile'
        },
        children: [
          {
            path: '/business/device',
            name: 'device',
            meta: {
              title: '设备管理'
            },
            component: () => import('@/views/business/Device')
          },
          {
            path: '/business/transportation',
            name: 'transportation',
            meta: {
              title: '运输管理'
            },
            component: () => import('@/views/business/Transportation')
          },
          {
            path: '/business/Productname',
            name: 'Productname',
            meta: {
              title: '品名维护'
            },
            component: () => import('@/views/business/Productname')
          },
          {
            path: '/business/consignment',
            name: 'consignment',
            meta: {
              title: '发货单位'
            },
            component: () => import('@/views/business/Consignment')
          },
          {
            path: '/business/sign',
            name: 'sign',
            meta: {
              title: '签收单位'
            },
            component: () => import('@/views/business/Sign')
          },
          {
            path: '/business/store',
            name: 'store',
            meta: {
              title: '库区管理'
            },
            component: () => import('@/views/business/Store')
          },
          {
            path: '/business/batch',
            name: 'batch',
            meta: {
              title: '批次管理'
            },
            component: () => import('@/views/business/Batch')
          }
        ]
      },
      {
        path: '/monitor',
        name: 'monitor',
        component: RouteView,
        redirect: '/monitor/general',
        meta: {
          title: '数据监控',
          icon: 'bar-chart'
        },
        children: [
          {
            path: '/monitor/general',
            name: 'general',
            meta: {
              title: '通用监控设备'
            },
            component: () => import('@/views/monitor/General')
          },
          {
            path: '/monitor/refrigeration',
            name: 'refrigeration',
            meta: {
              title: '冷库监控设备'
            },
            component: () => import('@/views/monitor/Refrigeration')
          },
          {
            path: '/monitor/car',
            name: 'car',
            meta: {
              title: '冷藏车监控设备'
            },
            component: () => import('@/views/monitor/Car')
          },
          {
            path: '/monitor/Container',
            name: 'Container',
            meta: {
              title: '集装箱监控设备'
            },
            component: () => import('@/views/monitor/Container')
          },
          {
            path: '/monitor/recorder',
            name: 'recorder',
            meta: {
              title: 'U盘记录仪'
            },
            component: () => import('@/views/monitor/Recorder')
          },
          {
            path: '/monitor/deliver',
            name: 'deliver',
            meta: {
              title: '运单监控'
            },
            component: () => import('@/views/monitor/Deliver')
          }
        ]
      },
      {
        path: '/warning',
        name: 'warning',
        component: RouteView,
        redirect: '/warning/check',
        meta: {
          title: '预警管理',
          icon: 'warning'
        },
        children: [
          {
            path: '/warning/check',
            name: 'check',
            meta: {
              title: '预警信息查询'
            },
            component: () => import('@/views/warning/Check')
          },
          {
            path: '/warning/record',
            name: 'record',
            meta: {
              title: '预警处理记录'
            },
            component: () => import('@/views/warning/Record')
          }
        ]
      },
      {
        path: '/history',
        name: 'history',
        component: RouteView,
        redirect: '/history/download',
        meta: {
          title: '历史记录',
          icon: 'history'
        },
        children: [
          {
            path: '/history/download',
            name: 'download',
            meta: {
              title: 'PDF下载详情'
            },
            component: () => import('@/views/history/Download')
          }
        ]
      }
    ]
  }
]

export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      }
      // {
      //   path: 'register',
      //   name: 'register',
      //   component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      // },
      // {
      //   path: 'register-result',
      //   name: 'registerResult',
      //   component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      // }
    ]
  }
  // {
  //   path: '/404',
  //   component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  // }
]
