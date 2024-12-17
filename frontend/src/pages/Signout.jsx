import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Signout = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    Swal.fire({
      title: 'Success!',
      text: "You have successfully signed out.",
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      localStorage.removeItem('user_id');
      window.location.href = '/';
    });
    
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Signout</h2>
      <div className="text-center">
        <p>Are you sure you want to sign out?</p>
        <button 
          className="btn btn-danger me-3" 
          onClick={handleSignout}
        >
          Yes, Sign Out
        </button>
        <button 
          className="btn btn-secondary" 
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Signout;
