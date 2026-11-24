import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'price',
      title: 'Price (₹)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),

    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'price',
    },
  },
})
