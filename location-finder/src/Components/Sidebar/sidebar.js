import React from 'react';
import './sidebar.css';

export default function Sidebar() {
  return (
  <>
    <div className="mainsidebar" style={{width: '35%', height: '70%', background: 'white', borderRadius: 30,textAlign:'center'}} >
        <div style={{color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word',padding:'20px'}}>FIND ACCORDING TO </div>
        
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <div className="option" style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 22, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
                PEOPLE
                </div>
            </div>

            <div style={{width: '2px', height: '40px', background: 'black'}}></div>

            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <div className="option location" style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 22, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
                LOCATIONS
                </div>
            </div>
        </div>

        <div style={{display:'flex',padding:'20px'}}>
            <div style={{width: '100%', height: '100%', background: '#3D84EA', borderRadius: 30}} >
                <div style={{color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
                +
                </div>
                <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
                ADD PERSON
                </div>
            </div>
            <div style={{width: '100%', height: '100%', background: '#3D84EA', borderRadius: 30}} >
                <div style={{color: 'white', fontSize: 30, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
                =
                </div>
                <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>
                CALCULATE
                </div>
            </div>
        </div>
        <div style={{width: '100%', height: '0%', border: '1px black solid'}}></div>
    </div>
  </>
  )
}
