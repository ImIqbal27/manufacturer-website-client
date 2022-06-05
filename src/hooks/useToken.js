import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
      
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://shrouded-lake-70100.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                 
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                    toast.success(' Successfully  log in !')
                })

        }

    }, [user]);
    return [token];
}

export default useToken;