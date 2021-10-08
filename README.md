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

You can create your grid system using three components (Container, Row, Col)

```
<script>
import { defineComponent } from 'vue';
import { Container, Row, Col } from 'iron-grid-system';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Container,
    Row,
    Col,
  },
});
</script>

<template>
  <div id="app">
    <Container>
      <Row>
        <Col :cols="6">
          <h1>Demo 1</h1>
        </Col>
        <Col :cols="6">
          <h1>Demo 2</h1>
        </Col>
      </Row>
    </Container>
  </div>
</template>


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

| Variable name         | Description                                  | Default value                                                                                                                                                      |
| --------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \$grid-columns        | Default number of grid columns.              | 12                                                                                                                                                                 |
| \$container-max-width | Maximum container width.                     | 1480px                                                                                                                                                             |
| \$container-gutter    | Right and left space value of the container. | 30px                                                                                                                                                               |
| \$grid-gutter         | Space between columns.                       | (0, 4, 8, 16, 24, 32, 40)                                                                                                                                          |
| \$breakpoints         | Screen breakpoints.                          | sm: '(max-width: 480px)' <br> md: '(min-width: 481px) and (max-width: 767px)' <br> lg: '(min-width: 768px) and (max-width: 1024px)' <br> xl: '(min-width: 1025px)' |

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

## 📃 API

### Container

Container properties

| Property | Description                                                     | Type                                           | Default |
| -------- | --------------------------------------------------------------- | ---------------------------------------------- | ------- |
| tag      | Container's html tag element.                                   | div, section, aside, nav, header, main, footer | div     |
| fluid    | Full width container, spanning the entire width of the viewport | Boolean                                        | false   |

### Row

Row properties

| Property | Description                                                     | Type                                           | Default |
| -------- | --------------------------------------------------------------- | ---------------------------------------------- | ------- |
| justify  | Container's html tag element.                                   | div, section, aside, nav, header, main, footer | div     |
| align    | Full width container, spanning the entire width of the viewport | Boolean                                        | false   |
| hGutter  | Full width container, spanning the entire width of the viewport | Boolean                                        | false   |
| vGutter  | Full width container, spanning the entire width of the viewport | Boolean                                        | false   |

### Col

Col properties

| Property | Description                                                     | Type                                           | Default |
| -------- | --------------------------------------------------------------- | ---------------------------------------------- | ------- |
| tag      | Container's html tag element.                                   | div, section, aside, nav, header, main, footer | div     |
| fluid    | Full width container, spanning the entire width of the viewport | Boolean                                        | false   |
