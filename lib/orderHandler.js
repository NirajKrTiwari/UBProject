export const createOrder =async({
    name,
    email,
    phone,
    address,
    foodname,
    total,
    cancel,
   PaymentMethod
})=>
{
    const res = await fetch('/api/order', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: JSON.stringify({
            name:name,
            email:email,
            phone:phone,
            address:address,
            method:PaymentMethod,
            foodname:foodname,
            cancel:cancel,
            total:parseFloat(total),
            status:1
        }),
    });
    const data = await res.json();
    return data;
}