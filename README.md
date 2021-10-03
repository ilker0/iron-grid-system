# Iron Grid System

A responsive grid system for Vue 2.x & 3.x.

## 📦 Installation

```
npm install iron-grid-system --save
```

or

```
yarn install iron-grid-system
```

## 🔨 Usage

#### For Vue 2.x

```
import Vue from "vue";
import App from "./App.vue";
import 'iron-grid-system/dist/style.css';

new Vue({
  render: h => h(App)
}).$mount("#app");

```

#### For Vue 3.x

```
import { createApp } from "vue";
import App from "./App.vue";
import 'iron-grid-system/dist/style.css';

const app = createApp(App);
app.mount("#app");

```
