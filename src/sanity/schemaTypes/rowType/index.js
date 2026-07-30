import { defineType, defineField } from "sanity";
import InlineIcon from "@sanity/icons/Inline";

export const blockRow = defineType({
  title: '2 columns',
  name: 'block_row',
  type: 'object',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'Column 1',
      type: 'object',
    }),
    defineField({
      name: 'Column 2',
      type: 'object'
    }),
  ]
  
});