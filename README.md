# 前端脚手架项目

[![maven](https://img.shields.io/badge/vue-3.2.25-brightgreen.svg)](https://github.com/vuejs/vue)
[![maven](https://img.shields.io/badge/typescript-4.4.4-brightgreen.svg)](https://www.tslang.cn/index.html)
[![maven](https://img.shields.io/badge/vite-2.7.2-brightgreen.svg)](https://www.vitejs.net/guide/#scaffolding-your-first-vite-project)

欢迎克隆我的项目，这是一个基于 vue3+vite+TypeScript 开发的前端脚手架，使用了最新的前端技术栈

## 项目说明

本项目采用技术栈为以下内容

- [vue3](https://v3.cn.vuejs.org/)
- [TypeScript](https://www.tslang.cn/index.html)
- [ElementPlus](https://element-plus.gitee.io/zh-CN/)
- [Vite（构建）](https://www.vitejs.net/)
- [vueRouter](https://router.vuejs.org/zh/)
- [Pinia (状态管理)](https://pinia.vuejs.org/)
- [Axios](https://www.axios-http.cn/docs/intro)
- [Mock（假数据）](http://mockjs.com/)
- [Vite-plugin-mock（自动开启 mock）](https://github.com/vbenjs/vite-plugin-mock/blob/HEAD/README.zh_CN.md)
- [lodash](https://www.lodashjs.com/)
- [echarts](https://echarts.apache.org/zh/index.html)
- [veeValidate（表单）](https://vee-validate.logaretm.com/v4/)
- [yup (表单规则验证)](https://github.com/jquense/yup)
- [toast-editor（markdown 编辑器）](https://ui.toast.com/tui-editor)
- [wangEditor（富文本编辑器）](https://www.wangeditor.com/)
- [unplugins-auto-import（自动导入 api）](https://doc.houdunren.com/vue/5%20%E6%8F%92%E4%BB%B6%E6%89%A9%E5%B1%95.html#%E8%87%AA%E5%8A%A8%E5%BC%95%E5%85%A5api)
- [unplugin-vue-components（自动导入组件）](https://doc.houdunren.com/vue/5%20%E6%8F%92%E4%BB%B6%E6%89%A9%E5%B1%95.html#%E8%87%AA%E5%8A%A8%E5%8A%A0%E8%BD%BD%E7%BB%84%E4%BB%B6)
- [gsap（操作样式动画）](https://github.com/greensock/GSAP)

## 安装项目

```
git clone https://gitee.com/congee-and-tea-egg/vue-admin.git

cd vue-admin

yarn

yarn dev
```

## 功能实现

- 全局变量（.env）
- 登录功能
- 登录校验（token）
- 游客验证
- 自动注册路由
- 根据模块自动注册路由
- Menu 菜单（移动端适配）
- 历史菜单（localStore）
- 面包屑
- markdown 编辑器（toast-editor）
- 后端权限校验
- 自动按需导入组件（element）
- 自动导入 api（vue composition）
- 列表动画组件

## 打包优化

- 组件按需导入
- api 自动导入
- 其他资源采用 cdn（echarts...）
- [包大小可视化](https://github.com/btd/rollup-plugin-visualizer)
- [分块打包](https://doc.houdunren.com/vue/4%20%E4%BC%98%E5%8C%96%E6%89%93%E5%8C%85.html#%E5%88%86%E5%9D%97%E6%89%93%E5%8C%85)

## 项目效果

![image-20220524094506539](https://heart-note-images.oss-cn-beijing.aliyuncs.com/image-20220524094506539.png)

![image-20220209195927311](https://s2.loli.net/2022/02/09/wXOyeAxuojJp5iN.png)

![image-20220524094439707](https://heart-note-images.oss-cn-beijing.aliyuncs.com/image-20220524094439707.png)

![image-20220209195959178](https://s2.loli.net/2022/02/09/wrB5vsxkdRJUE91.png)

![image-20220524094533447](https://heart-note-images.oss-cn-beijing.aliyuncs.com/image-20220524094533447.png)

![image-20220209201108271](https://s2.loli.net/2022/02/09/9dONjSeoRUAlzZa.png)

## 在线预览

如果想查看更多优质的项目或查看在线预览地址可以前往我的博客地址

博客：https://langya11.icu

其他项目：https://gitee.com/congee-and-tea-egg
