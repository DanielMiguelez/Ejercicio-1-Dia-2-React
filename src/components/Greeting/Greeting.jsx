import React, { useEffect }  from 'react'
import { useState } from 'react';

const Greeting = (props) => {
    const [name, setName] = useState(props.user.name);
    useEffect(() => {
        setTimeout(() => {
          setName("alfonsina");
        }, 3000);
      });

    return (
    <p> Hola {name}</p>
  )
    }
export default Greeting;