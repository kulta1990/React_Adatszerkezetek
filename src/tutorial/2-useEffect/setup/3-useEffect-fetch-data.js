import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }


  useEffect(() => {
    getUsers();
  });
  return <>
    <h3>Users</h3>
    <ul className='users'>
      {users.map((userrrr) => {
        const {id, login, avatar_url, html_url} = userrrr;
        return (
          <li key={id}>
            <img src={avatar_url} alt={login}></img>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>link</a>
            </div>
          </li>
        )
      })};

    </ul>
  </>
};

export default UseEffectFetchData;
