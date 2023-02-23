export default
{
    name: 'order',
    title: 'Order',
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
            name: 'phone',
            title: 'Phone',
            type: 'string',
            option:
            {
                maxLength: 10
            }
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string',
            option:
            {
                maxLength: 40
            }
        },
        {
            name: 'method',
            title: 'Method',
            type: 'number',
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number',
        },
        {
            name: 'status',
            title: 'Status (Type: 1. COD,2. Cooking,3. Onway,4. Delivered)',
            type: 'number',
        }
        // {
        //     name: 'food',
        //     title: 'Food',
        //     type: 'array',
        //     of: [
        //         {
    ]
}