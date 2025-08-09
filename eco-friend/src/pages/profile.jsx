import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <div className="app">
      <div className="panel">
        <Header />
        <div style={{marginTop:12}}>
          <div className="card">
            <h3>Your Profile</h3>
            <p>Profile and account settings will appear here.</p>
          </div>
        </div>
        <Footer />
      </div>
      <div className="canvasWrap">
        <div className="topbar">
          <div style={{fontWeight:800,fontSize:18}}>Profile</div>
        </div>
      </div>
    </div>
  );
}
