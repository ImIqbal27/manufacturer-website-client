import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        // console.log('insde tkn',user)
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data insd tkn', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                    toast.success('Registration successful !')
                })

        }

    }, [user]);
    return [token];
}

export default useToken;