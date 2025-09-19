'use client';

import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const AuthButton: React.FC = () => {
  const { user, loading, signInWithGoogle, logout } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            width={32}
            height={32}
            src={user.photoURL || ''}
            alt={user.displayName || 'User'}
            className="h-8 w-8 rounded-full"
          />
          <span className="text-sm text-gray-700">
            {user.displayName || user.email}
          </span>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          <FontAwesomeIcon icon={faSignOutAlt} />
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
    >
      <FontAwesomeIcon icon={faGoogle} />
      Sign in with Google
    </button>
  );
};

export default AuthButton;
