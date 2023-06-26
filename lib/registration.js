export const createRegistration = async (
    {
        name,
        email,
        password,
        phone
    }
) => {
    const res = await fetch('/api/register', {
        method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phone: phone
        }),
    });
    const data = await res.json();
    return data;
}