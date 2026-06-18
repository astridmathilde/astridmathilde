// schemas/project.js
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      title: 'Project Title',
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
      title: 'Featured Image',
      name: 'thumbnail',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }),
      ],
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
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
      title: 'Type of project',
      name: 'type',
      type: 'string',
      options: {
        list: [
          {title: 'Studio course', value: 'studio'},
          {title: 'Personal project', value: 'personal'},
          {title: 'Summer internship', value: 'internship'},
          {title: 'Client project', value: 'client'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      title: 'Type of project',
      name: 'other_type',
      type: 'string',
      hidden: ({ document }) => document.type !== "other",
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'App', value: 'app'},
          {title: 'AI-assisted tool', value: 'ai-tool'},
          {title: 'Digital tool', value: 'digital-tool'},
          {title: 'Graphic design', value: 'graphic-design'},
          {title: 'System interface', value: 'system-interface'},
          {title: 'Website', value: 'website'},
          {title: 'Web application', value: 'web-application'},
        ],
      },
    }),
    defineField({
      title: 'Collaborative partner or client',
      name: 'collaborator',
      type: 'boolean'
    }),
    defineField({
      title: 'Collaborative partner / Client',
      name: 'partner',
      type: 'object',
      hidden: ({ document }) => !document?.collaborator,
      fields: [
        defineField({name: 'label', type: 'string', title: 'Label'}),
        defineField({name: 'value', type: 'string', title: 'Value'}),
        defineField({name: 'link', type: 'url', title: 'Link'}),
      ],
      options: {
        columns: 3,
      },
    }),
    defineField({
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        defineField({name: 'name', type: 'string', title: 'Name'}),
        defineField({name: 'website', type: 'url', title: 'Website'}),
      ],
      options: {
        columns: 2,
      },
    }),
    defineField({
      title: 'Time frame',
      name: 'time',
      type: 'object',
      fields: [
        defineField({name: 'duration', type: 'string', title: 'Duration'}),
        defineField({name: 'year', type: 'number', title: 'Year'}),
      ],
      options: {
        columns: 2,
      },
    }),
    defineField({
      title: 'Team',
      name: 'contributors',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'contributor',
          fields: [
            defineField({name: 'name', type: 'string', title: 'Name'}),
            defineField({name: 'website', type: 'url', title: 'Website'}),
          ],
          options: {
            columns: 2,
          },
        }),
      ],
    }),
    defineField({
      title: 'My roles',
      name: 'roles',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'link',
          fields: [
            defineField({name: 'title', type: 'string', title: 'Title'}),
            defineField({name: 'url', type: 'url', title: 'URL'}),
          ],
          options: {
            columns: 2,
          },
        }),
      ],
    }),
  ],
})