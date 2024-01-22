import React from 'react'

export default function Person() {
  return (
      <div style={{width: '100%', height: '100%', position: 'relative',marginTop:'10px'}}>
                <div style={{width: 402, height: 158, left: 0, top: 0, position: 'absolute', background: '#D9D9D9', borderRadius: 30}} />
                <div style={{left: 23, top: 25, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Name 1</div>
                <div style={{width: 108, height: 29, left: 23, top: 104, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Location:</div>
            <div style={{width: 402, height: 0, left: 0, top: 79, position: 'absolute', border: '1px black solid'}}></div>
        </div>
  )
}
