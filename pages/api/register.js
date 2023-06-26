import {client} from '../../lib/client';
export default async function handler(req, res)
{
    switch(req.method)
    {
        case 'POST':
            const newUser = await JSON.parse(req.body); 
            try{
                await client.create({
                    _type: 'user',
                    name: newUser.name,
                    email: newUser.email,
                    password: newUser.password,
                    phone: newUser.phone
                }).then((data)=>
                {
                    res.status(200).json(data._id);
                });
            }
            catch(error)
            {
                console.log(error);
                res.status(500).json({msg:"Error, check console."})
            }
            break;
    }
}