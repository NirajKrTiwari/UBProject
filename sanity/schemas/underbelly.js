export default
{
    name: 'underbelly',
    title: 'underbelly',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'name',
            title: 'name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'price',
            type: 'array',
            of: [{type: 'number'}]
        },
        {
            name: 'description',
            title: 'description',
            type: 'text'
        },
        {
            name: 'time',
            title: 'preperation time',
            type: 'number'
        }
    ]
}
