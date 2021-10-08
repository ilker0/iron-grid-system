# Iron Grid System

A responsive grid system for 3.x.

## 📦 Installation

```
npm install iron-grid-system --save
```

or

```
yarn install iron-grid-system
```

## 🔨 Usage

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

| Property | Description                                                      | Type                                           | Default |
| -------- | ---------------------------------------------------------------- | ---------------------------------------------- | ------- |
| tag      | Container's html tag element.                                    | div, section, aside, nav, header, main, footer | div     |
| fluid    | Full width container, spanning the entire width of the viewport. | Boolean                                        | false   |

### Row

Row properties

| Property | Description                       | Type                                           | Default |
| -------- | --------------------------------- | ---------------------------------------------- | ------- |
| tag      | Row html tag element.             | div, section, aside, nav, header, main, footer | div     |
| justify  | Horizontal arrangement.           | start, end, center, between, around            | start   |
| align    | Vertical alignment.               | start, end, center, between, around            | start   |
| hGutter  | Spacing horizontal between column | Number, Object({sm: 4, md: 8, lg: 16, xl: 24}) | 0       |
| vGutter  | Spacing vertical between column   | Number, Object({sm: 4, md: 8, lg: 16, xl: 24}) | 0       |

### Col

Col properties

| Property | Description                                     | Type                                           | Default |
| -------- | ----------------------------------------------- | ---------------------------------------------- | ------- |
| tag      | Col html tag element.                           | div, section, aside, nav, header, main, footer | div     |
| cols     | Col width.                                      | Number, Object({sm: 12, md: 6, lg: 4 , xl: 3}) | 0       |
| offset   | Number of cells to shift the cell from the left | Number, Object({sm: 12, md: 6, lg: 4 , xl: 3}) | 0       |
| order    | Raster order                                    | Number, Object({sm: 3, md: 4, lg: 2 , xl: 1})  | 0       |
