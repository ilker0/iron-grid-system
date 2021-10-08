import { h } from 'vue';
import {
  IRON_ROW,
  ArrayValidator,
  ObjectOrNumberValidator,
  ClassMatch,
} from '../utils';

export default {
  name: IRON_ROW,

  render() {
    const { justify, tag, align, vGutter, hGutter, $slots } = this;

    const vGutterClasses = ClassMatch('i-row-vgutter', vGutter);
    const hGutterClasses = ClassMatch('i-row-hgutter', hGutter);

    return h(
      tag,
      {
        class: {
          'i-row': true,
          [`justify-${justify}`]: true,
          [`align-${align}`]: true,
          [vGutterClasses]: vGutter,
          [hGutterClasses]: hGutter,
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

    justify: {
      type: String,
      default: () => 'start',
      validate: val => ArrayValidator(val, 'FLEX'),
    },

    align: {
      type: String,
      default: () => 'start',
      validate: val => ArrayValidator(val, 'FLEX'),
    },

    hGutter: {
      type: [Number, Object],
      validate: val => {
        ObjectOrNumberValidator(val, 'BREAKPOINTS');
      },
    },

    vGutter: {
      type: [Number, Object],
      validate: val => {
        ObjectOrNumberValidator(val, 'BREAKPOINTS');
      },
    },
  },
};
