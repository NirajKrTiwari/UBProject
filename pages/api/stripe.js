import Stripe from 'stripe'
const stripe=new Stripe(
    "sk_test_51MlEIISBzUNfADAjPZUfWV8tPu6G3Q3YbO0oR9ZIkfNmP0nEeNdH6PWOSRS18A3VPClMTQNVkNiWoCPTZZD2tpT9009vfn809H"
)

export default async function(req,res){
    if(req.method=='POST')
    {
        try{
            const params={ 
            submit_type:'pay',
            mode:"payment",
            payment_method_types:['card'],
            line_items:req.body.map((item)=>
            {
                const img =item.image.asset._ref;

                const newImage=img
                .replace(
                    'image-',
                    "https://cdn.sanity.io/images/5stz9231/production/"
                )
                .replace('-jpg','.jpg');
                return{
                    price_data:{
                        currency:'inr',
                        product_data:{
                            name:item.name,
                            images:[newImage],
                        },
                        unit_amount:item.price*100,
                    },
                    adjustable_quantity:{
                        enabled:false,
                    },
                    quantity:item.quantity,
                }
            }),
            success_url:`${req.headers.origin}/success`,
            cancel_url:`${req.headers.origin}/Cart`,
            };
            const session=await stripe.checkout.sessions.create(params);
            console.log(session);
            res.status(200).json(session)
        }
        catch(error)
        {
            res.status(500).json(error.message)
        }
    }
    else{
        res.setHeader('Allow','POST')
        res.status(405).end('Method Not Allowed')
    }
}