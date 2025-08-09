import React from 'react';

export default function Header() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <div>
        <div style={{fontSize:22,fontWeight:900,color:'#dff6ff'}}>Eco Friend</div>
        <div className="small">A living creative universe</div>
      </div>
      <div>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
}
