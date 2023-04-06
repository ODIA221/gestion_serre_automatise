import React from 'react'

export default function ModifierMdp() {
        const [mdpActuel, setMdpActuel] = useState('');
        const [mdpNouveau, setMdpNouveau] = useState('');
        const [errorMsg, setErrorMsg] = useState('');
      
        const handleChange = (event) => {
          const { name, value } = event.target;
          if (name === 'mdpActuel') {
            setMdpActuel(value);
          } else if (name === 'mdpNouveau') {
            setMdpNouveau(value);
          }
        };
      
        const handleSubmit = (event) => {
          event.preventDefault();
      
          axios.put('/api/users/1/password', { oldPassword, newPassword })
            .then((response) => {
              localStorage.setItem('token', response.data.token);
              setErrorMsg('');
              setMdpActuel('');
              setMdpNouveau('');
            })
            .catch((error) => {
              if (error.response) {
                setErrorMsg(error.response.data.message);
              } else {
                setErrorMsg('Une erreur est survenue');
              }
            });
        };

}
