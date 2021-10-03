import { h } from 'vue';
import { IRON_CONTAINER, ArrayValidator } from '../utils';

export default {
  name: IRON_CONTAINER,

  render() {
    const { fluid, tag, $slots } = this;

    return h(
      tag,
      {
        class: {
          'i-container': true,
          'i-container-fluid': fluid,
        },
      },
      $slots.default(),
    );
  },

  props: {
    tag: {
      type: String,
      default: () => 'div',
      validate: (val) => ArrayValidator(val, 'TAGS'),
    },

    fluid: {
      type: Boolean,
      default: () => false,
    },
  },
};
