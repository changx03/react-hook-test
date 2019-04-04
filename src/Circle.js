import React from 'react';

export default function Circle({ color }) {
  return <div className="circle" style={{
    backgroundColor: color,
    width: 20,
    height: 20,
    borderRadius: 10
  }}/>
}
