'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import { ThemeColors } from '@/types/appTypes';

interface AuthButtonProps {
  currentTheme: ThemeColors;
}

const AuthButton: React.FC<AuthButtonProps> = ({ currentTheme }) => {
  const { user, loading, signInWithGoogle, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (user) {
    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`group flex cursor-pointer items-center gap-3 rounded-xl px-4 py-2.5 transition-all duration-200 hover:shadow-sm focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none ${
            currentTheme.text
          } hover:${currentTheme.card} ${
            isDropdownOpen ? `${currentTheme.card} shadow-sm` : ''
          }`}
        >
          <div className="relative">
            <Image
              width={36}
              height={36}
              src={user.photoURL || ''}
              alt={user.displayName || 'User'}
              className="h-9 w-9 rounded-full shadow-sm ring-2 ring-white transition-all duration-200 group-hover:ring-blue-200"
            />
            <div className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white"></div>
          </div>
          <div className="flex flex-col items-start">
            <span className={`text-sm font-semibold ${currentTheme.text}`}>
              {user.displayName || 'User'}
            </span>
            <span className={`text-xs ${currentTheme.text} opacity-70`}>
              {user.email}
            </span>
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-1 text-xs transition-all duration-200 ${
              currentTheme.text
            } opacity-60 ${
              isDropdownOpen
                ? 'rotate-180 opacity-100'
                : 'group-hover:opacity-100'
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 absolute right-0 z-50 mt-3 w-64 duration-200">
            <div
              className={`overflow-hidden rounded-xl shadow-xl ring-1 ring-gray-200/50 backdrop-blur-sm ${currentTheme.bg}`}
            >
              <div className="p-4">
                <div>
                  <button
                    onClick={() => {
                      logout();
                      setIsDropdownOpen(false);
                    }}
                    className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition-all duration-200 hover:bg-red-50 hover:text-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-1 focus:outline-none"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-100">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-xs"
                      />
                    </div>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={signInWithGoogle}
      className="group flex cursor-pointer items-center gap-3 rounded-xl border-2 border-gray-200 bg-white px-4 py-2 shadow-sm transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200 group-hover:shadow-md group-hover:ring-gray-300">
        <FontAwesomeIcon icon={faGoogle} className="text-blue-600" />
      </div>
      <span className="text-sm font-semibold text-gray-900 group-hover:text-gray-700">
        Sign in
      </span>
    </button>
  );
};

export default AuthButton;
