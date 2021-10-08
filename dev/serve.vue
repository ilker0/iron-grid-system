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
