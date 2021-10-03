import { h } from 'vue';
import { IRON_COL, ObjectOrNumberValidator, ClassMatch } from '../utils';

export default {
  name: IRON_COL,

  render() {
    const { cols, tag, offset, order, $slots } = this;

    const colClasses = ClassMatch('i-col', cols);
    const offsetClasses = ClassMatch('i-col-offset', offset);
    const orderClasses = ClassMatch('i-col-order', order);

    return h(
      tag,
      {
        class: {
          'i-col': true,
          [colClasses]: cols,
          [offsetClasses]: offset,
          [orderClasses]: order,
        },
      },
      $slots.default(),
    );
  },

  props: {
    tag: {
      type: String,
      default: () => 'div',
      validate: val => ArrayValidator(val, 'TAGS'),
    },

    cols: {
      type: [Number, Object],
      required: true,
      validate: val => {
        ObjectOrNumberValidator(val, 'BREAKPOINTS');
      },
    },

    offset: {
      type: [Number, Object],
      validate: val => {
        ObjectOrNumberValidator(val, 'BREAKPOINTS');
      },
    },

    order: {
      type: [Number, Object],
      validate: val => {
        ObjectOrNumberValidator(val, 'BREAKPOINTS');
      },
    },
  },
};
