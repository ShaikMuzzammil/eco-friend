import React, { useState } from 'react';

export default function Sidebar({ onLoadWorld }) {
  const [prompt, setPrompt] = useState('');

  function handleCreate() {
    const world = { id: Date.now(), name: prompt || 'Mystic Realm', prompt };
    const list = JSON.parse(localStorage.getItem('eco_worlds') || '[]');
    localStorage.setItem('eco_worlds', JSON.stringify([world, ...list].slice(0,20)));
    onLoadWorld && onLoadWorld(world);
    setPrompt('');
  }

  function loadSample() {
    const list = JSON.parse(localStorage.getItem('eco_worlds') || '[]');
    if (list.length) onLoadWorld(list[0]);
    else alert('No saved worlds yet. Create one with "Create".');
  }

  return (
    <div style={{display:'flex',flexDirection:'column',gap:12}}>
      <div className="card">
        <div style={{fontWeight:700}}>Creator Tools</div>
        <input className="input" placeholder="Describe your dream world..." value={prompt} onChange={(e)=>setPrompt(e.target.value)} />
        <div style={{display:'flex',gap:8,marginTop:8}}>
          <button className="btn" onClick={handleCreate}>Create</button>
          <button className="btn" onClick={loadSample}>Load Last</button>
        </div>
      </div>

      <div className="card">
        <div style={{fontWeight:700}}>My Worlds</div>
        <div style={{marginTop:8}}>
          {(JSON.parse(localStorage.getItem('eco_worlds')||'[]')).slice(0,5).map(w => (
            <div key={w.id} style={{display:'flex',justifyContent:'space-between',padding:8,marginBottom:6,background:'rgba(255,255,255,0.02)',borderRadius:8}}>
              <div>{w.name}</div>
              <div><button className="small" onClick={()=>onLoadWorld(w)}>Load</button></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
