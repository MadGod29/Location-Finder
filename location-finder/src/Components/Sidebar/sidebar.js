import React from 'react';
import './sidebar.css';

export default function Sidebar() {
    const shownotif=()=>{
        alert("Button pressed")
    }
  return (
  <>
    <div className="mainsidebar" style={{width: '420px', height: '100vh', background: 'white',borderTopRightRadius:'30px',borderBottomRightRadius:'30px',textAlign:'center'}} >
        <div style={{color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word',padding:'20px'}}>FIND ACCORDING TO </div>
        
        <div style={{display: 'flex', alignItems: 'center'}}>
            <button onClick={shownotif} style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <div className="option" style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '290', wordWrap: 'break-word'}}>
                PEOPLE
                </div>
            </button>

            <div style={{width: '2px', height: '45px', background: 'black'}}></div>

            <button onClick={shownotif} style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                <div className="option location" style={{width: '100%', height: '100%', textAlign: 'center', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '290', wordWrap: 'auto'}}>
                LOCATIONS
                </div>
            </button>
        </div>

        <div style={{display:'flex',justifyContent: 'space-between',padding:'20px'}}>
            <button onClick={shownotif} style={{width: '100vh', height: '100%', background: '#3D84EA', borderRadius: 30,marginRight:'20px'}} >
                <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word',padding:'10px',paddingTop:'20px',paddingBottom:'20px'}}>
                ADD PERSON
                </div>
            </button>
            <button onClick={shownotif} style={{width: '100vh', height: '100%', background: '#3D84EA', borderRadius: 30}} >
                <div style={{color: 'white', fontSize: 20, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word',padding:'20px'}}>
                CALCULATE
                </div>
            </button>
        </div>
        <div style={{width: '100%', height: '0%', border: '1px black solid'}}></div>

        {/* iterate the pperson component as addperson button is pressed*/}
    </div>
  </>
  )
}
