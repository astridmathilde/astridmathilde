import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  type: 'document',
  title: 'Pages',
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
      title: 'Introduction',
      name: 'intro',
      type: 'array',
      hidden: ({document}) => {
        return document?.slug?.current != 'index'
      },
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      title: 'Projects',
      name: 'project_selector',
      hidden: ({document}) => {
        return document?.slug?.current !== 'index'
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
    }),
    defineField({
      title: 'Contact',
      name: 'contact',
      type: 'array',
      hidden: ({document}) => {
        return document?.slug?.current != 'index'
      },
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      hidden: ({document}) => {
        return document?.slug?.current == 'index'
      },
      of: [
        defineArrayMember({
          type: 'block',
          styles: [
            {title: 'Heading 3', value: 'h3'},
            {title: 'Heading 4', value: 'h4'},
            {title: 'Heading 5', value: 'h5'},
            {title: 'Heading 6', value: 'h6'},
          ],
          of: [
            defineArrayMember({
              name: 'image',
              type: 'image',
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative text',
                }),
                defineField({
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                }),
              ],
            }),
            defineArrayMember({
              title: 'Video',
              name: 'video',
              type: 'file',
            }),
          ],
        }),
      ],
    }),
    defineField({
      title: 'Further discovery',
      name: 'further_discovery',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
    }),
  ],
})