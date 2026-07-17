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
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      title: 'Content',
      name: 'content',
      hidden: ({document}) => {
        return document?.slug?.current == 'work'
      },
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block'
        }),
      ],
    }),
    defineField({
      title: 'Projects',
      name: 'project_selector',
      hidden: ({document}) => {
        return document?.slug?.current !== 'work'
      },
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'project'
            }
          ],
        }
      ],
    })
  ],
})