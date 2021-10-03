<script>
import { defineComponent } from 'vue';
import { Container } from '@/lib-components';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Container,
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
