# 🍱 Food Delivery Mobile App

This project is a mobile food delivery platform that allows users to browse nearby restaurants, view menus, place orders, and track delivery status in real time. It adopts a front-end/back-end decoupled architecture. The frontend is built using **React Native** for cross-platform development, while the backend leverages **Sanity**, a headless CMS, to manage and provide structured content. The tech stack is selected for its balance of development efficiency, performance, and scalability, making it ideal for building commercial-grade mobile app prototypes.

---

## 🥇 Team Members

- **Team Leader**: MAI Haoxuan
- **Product Manager**: PENG Xinran
- **Documentation**: JIA Yuqing, HUANG Jiaman, LIU Mengmiao
- **Development**: PAN Xiaoyu, CHEN Wangjunyang
- **Testing**: PAN Xiaoyu, CHEN Wangjunyang

---

## 🧩 Features Implemented

- [x] Restaurant list display
- [x] Menu categories and item detail pages
- [x] Shopping cart and checkout flow
- [x] Global state management using Redux (cart, location, etc.)
- [x] Map view with user and restaurant locations
- [x] CMS management of menu and restaurant data via Sanity
- [x] Rapid development and OTA updates using Expo

---

## 🔧 Tech Stack

### Frontend (React Native + Expo)

#### 1. Core Framework

- **React Native**: Cross-platform mobile development framework
- **Expo**: Streamlined development, build, and OTA update tools

#### 2. State Management

- **Redux Toolkit**: Efficient and scalable state management

#### 3. Navigation

- **React Navigation + Native Stack**: Multi-page routing with native transition support

#### 4. UI & Animation

- `nativewind`: Tailwind-style utility-first styling
- `react-native-animatable`: Component and page transitions
- `react-native-linear-gradient` / `expo-linear-gradient`: Gradient backgrounds
- `react-native-heroicons` / `feather`: Icon support
- `react-native-progress`: Progress bars and loading indicators

#### 5. Map Integration

- `react-native-maps`: Google Maps / Apple Maps integration
    - Displays restaurant and user locations
    - Can be extended to support real-time courier tracking

#### 6. Utility Libraries

- `react-native-safe-area-context`: Ensures layout adapts to notched or rounded screens
- `react-native-svg`: SVG support for scalable icons and graphics

---

### Backend (Sanity CMS)

#### 1. Sanity Content Management System

- Structured content modeling with real-time API access
- Live previews and collaborative editing
- Flexible data queries using GROQ
- Built-in image processing (lazy loading, cropping, responsiveness)

#### Use Cases

- Restaurant data management (name, address, rating, etc.)
- Menu items (category, price, description, image)
- Promotions and banners
- City/category-based filtering options

#### 2. Development Tools

- **TypeScript**: Consistent language for frontend and backend development
- **ESLint + Prettier**: Code linting and formatting to ensure code quality and consistency

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/FishCharlotte/Food-delivery-App.git
cd deliveroo-clone
```

### 2. Install Dependencies

```bash
npm install
```
### 3. Start the Frontend Development Server

```bash
npm run start
```

### 4. Start the Backend (Sanity Studio)

```bash
sanity dev
```

---

## 📦 Dependency Environment
Node.js：>= 18.x

React Native：0.70.x

Expo SDK：47.x

Sanity：v3.x

TypeScript：>= 4.x

## 📄 License
MIT © 2025 xsFish
