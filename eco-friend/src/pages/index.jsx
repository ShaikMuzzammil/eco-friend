import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import AIChat from '../components/AIChat';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CanvasScene = dynamic(() => import('../components/CanvasScene'), { ssr: false });

export default function Home() {
  const [selectedWorld, setSelectedWorld] = useState(null);

  return (
    <div className="app">
      <div className="panel">
        <Header />
        <div style={{marginTop:12}}>
          <Sidebar onLoadWorld={(w) => setSelectedWorld(w)} />
        </div>
        <div style={{marginTop:12}}>
          <AIChat />
        </div>
        <div style={{marginTop:12}}>
          <Footer />
        </div>
      </div>

      <div className="canvasWrap">
        <div className="topbar">
          <div style={{fontWeight:800,fontSize:18}}>Eco Friend • Your Creative Universe</div>
          <div className="small">Build • Heal • Create</div>
        </div>

        <div style={{flex:1,position:'relative'}}>
          <CanvasScene world={selectedWorld} />
        </div>
      </div>
    </div>
  );
}
