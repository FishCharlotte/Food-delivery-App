# 🍱 外卖平台移动应用

本项目为一款外卖平台移动应用，用户可浏览附近商家、查看菜单、下单购买并跟踪配送状态。整体采用前后端分离架构，基于 React Native 构建跨平台 App，后端采用 Headless CMS（Sanity）进行内容管理与数据提供。技术栈选型兼顾开发效率、性能与可扩展性，适用于快速构建商业级 App 原型。

---

## 🥇 项目成员
- **组长**：MAI Haoxuan
- **产品经理**：PENG Xinran
- **文档撰写**：JIA Yuqing, HUANG Jiaman, LIU Mengmiao
- **开发**：PAN Xiaoyu, CHEN Wangjunyang
- **测试**：PAN Xiaoyu, CHEN Wangjunyang

## 🧩 已实现功能

- [x] 商家列表展示
- [x] 菜品分类、详情页
- [x] 加入购物车、下单页面
- [x] Redux 管理全局状态（购物车、位置等）
- [x] 地图展示商家与用户位置
- [x] Sanity CMS 管理商家、菜单等数据
- [x] Expo 快速开发与 OTA 更新支持

---

## 🔧 技术栈

### 前端（React Native + Expo）

#### 1. 核心框架

- **React Native**：跨平台移动应用开发框架
- **Expo**：集成开发、打包与 OTA 更新，简化部署流程

#### 2. 状态管理

- **Redux Toolkit**：简洁高效的全局状态管理方案

#### 3. 页面与导航

- **React Navigation + Native Stack**：支持多页面跳转与原生导航体验

#### 4. UI 与动画

- `nativewind`：Tailwind 风格的样式系统
- `react-native-animatable`：页面过渡动画
- `react-native-linear-gradient` / `expo-linear-gradient`：渐变背景
- `react-native-heroicons` / `feather`：图标支持
- `react-native-progress`：加载与进度组件

#### 5. 地图服务

- `react-native-maps`：支持 Google Maps / Apple Maps
    - 展示商家位置、用户定位
    - 后续可扩展为实时配送位置展示

#### 6. 其他实用库

- `react-native-safe-area-context`：适配刘海屏和异形屏
- `react-native-svg`：支持 SVG 图标渲染


### 后端（Sanity CMS）

#### 1. Sanity 内容管理系统

- 支持结构化内容建模
- 实时预览、文档协作
- GROQ 查询语言灵活调用数据
- 图像处理（懒加载、裁剪、自适应）

#### 适用场景

- 商家信息管理（名称、地址、评分等）
- 菜品信息（分类、价格、描述、图像）
- 活动推荐 / 广告位配置
- 城市与筛选选项管理

#### 2. 开发语言与工具链

- **TypeScript**：统一前后端语言，提升开发体验
- **ESLint + Prettier**：保持代码规范一致性

---

## 🚀 快速开始

### 1. 克隆项目

```bash
https://github.com/FishCharlotte/Food-delivery-App.git
cd deliveroo-clone
```
### 2. 安装依赖

```bash
npm install
```
### 3. 启动开发服务器

```bash
npm run start
```

### 4. 启动后端

```bash
sanity dev
```

---

## 📦 依赖环境
Node.js：>= 18.x

React Native：0.70.x

Expo SDK：47.x

Sanity：v3.x

TypeScript：>= 4.x

## 📄 License
MIT © 2025 xsFish
