import React from 'react';

export default function Footer(){
  return (
    <div style={{marginTop:12}}>
      <div className="small">© {new Date().getFullYear()} Eco Friend • All magic reserved.</div>
    </div>
  );
}
