import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'module',
  type: 'document',
  title: 'Modules',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block'
        }),
      ],
    }),
  ],
})