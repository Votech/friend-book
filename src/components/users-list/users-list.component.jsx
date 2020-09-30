import React from 'react';

import './users-list.styles.scss';

import UsersRow from '../users-row/users-row.component';

const UsersList = ({ users }) => {
  return (
    <div className='users-list'>
      {users.map((user) => (
        <UsersRow
          key={user.id}
          id={user.id}
          fullName={user.fullName}
          profilePhotoUrl={user.data.profilePhotoUrl}
        />
      ))}
    </div>
  );
};

export default UsersList;
