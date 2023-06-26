export default
{
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            option:
            {
                maxLength: 40
            }
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            option:
            {
                maxLength: 100
            }
        },
        {
            name: 'password',
            title: 'Password',
            type: 'string',
            option:
            {
                maxLength: 10
            }
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
            option:
            {
                maxLength: 10
            }
        }
    ]
}