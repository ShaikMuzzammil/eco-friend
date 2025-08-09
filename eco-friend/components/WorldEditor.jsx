import React from 'react';

export default function WorldEditor({ world, onSave }) {
  if (!world) return (
    <div className="card">
      <div>No world selected — create one from the left panel.</div>
    </div>
  );

  return (
    <div className="card">
      <div style={{ fontWeight: 700 }}>{world.name}</div>
      <div style={{ marginTop: 8 }}>Prompt: {world.prompt}</div>
      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={() => onSave && onSave(world)}>Export World</button>
      </div>
    </div>
  );
}
