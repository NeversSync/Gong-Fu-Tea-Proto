export default {
  name: 'listing',
  type: 'document',
  title: 'Listing',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'location',
      type: 'text',
      title: 'Location'
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}]
    }
  ]
}
