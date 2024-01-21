import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (<>
  <div className="mainsidebar" style={{width: '100%', height: '100%', background: 'white', borderRadius: 30}} >
    <div style={{color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>FIND ACCORDING TO </div>
    <div style={{display: 'flex', alignItems: 'center'}}>
        <div className="option" style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>PEOPLE</div>
        
        <div style={{width: '100%', height: '100%', transform: 'rotate(-90deg)', transformOrigin: '0 0', border: '1px black solid'}}></div>
        
        <div className="option location" style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>LOCATIONS</div>
    </div>
    <div style={{display:'flex'}}>
        <div style={{width: '100%', height: '100%', background: '#3D84EA', borderRadius: 30,border: '1px black solid'}} >
            <div style={{color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>+</div>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>ADD PERSON</div>
        </div>
        <div style={{width: '100%', height: '100%', background: '#3D84EA', borderRadius: 30,border: '1px black solid'}} >
            <div style={{color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>=</div>
            <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>CALCULATE</div>
        </div>
    </div>
    <div style={{width: '100%', height: '100%', border: '1px black solid'}}></div>
  </div>
  </>
  )
}
