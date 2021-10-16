import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from './../Auth.js';

export default function Sidebar() {
  let history = useHistory();
  let auth = useAuth();

  return (
    <div>
      <button
        onClick={() => {
          auth.signout(() => history.push('/'));
        }}
      >
        Sign out
      </button>
    </div>
  );
}
