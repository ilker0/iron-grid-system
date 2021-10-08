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

## 🛠️ Configuration

custom.scss file should be created for customization

```
import { createApp } from "vue";
import App from "./App.vue";

import "./assets/custom.scss";

const app = createApp(App);
app.mount("#app");

```

Default values

| Variable name         | Default value                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$grid-columns        | 12                                                                                                                                                                 |
| \$container-max-width | 1480px                                                                                                                                                             |
| \$container-gutter    | 30px                                                                                                                                                               |
| \$grid-gutter         | (0, 4, 8, 16, 24, 32, 40)                                                                                                                                          |
| \$breakpoints         | sm: '(max-width: 480px)' <br> md: '(min-width: 481px) and (max-width: 767px)' <br> lg: '(min-width: 768px) and (max-width: 1024px)' <br> xl: '(min-width: 1025px)' |

Example custom.scss

```
@import "../../node_modules/iron-grid-system/src/style/iron-variables";

$grid-columns: 12;
$container-max-width: 1000px;
$container-gutter: 0px;
$grid-gutter: (0, 4, 8);

$breakpoints: (
  sm: "(max-width: 480px)",
  md: "(min-width: 481px) and (max-width: 767px)",
  lg: "(min-width: 768px) and (max-width: 1024px)",
  xl: "(min-width: 1025px)",
);

@import "../../node_modules/iron-grid-system/src/style/iron-container";
@import "../../node_modules/iron-grid-system/src/style/iron-row";
@import "../../node_modules/iron-grid-system/src/style/iron-col";

```
