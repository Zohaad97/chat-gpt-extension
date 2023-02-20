import React, { useState } from 'react';
import ChatItem from './ChatItem';
function Content() {

    return (
        <div className="row d-flex" style={{ backgroundColor: '#343541' }}>
            <div style={{ height: '75vh', padding: 0, display: 'flex', flexDirection: 'column' }} className="">

                <ChatItem isDark text="The reason for my application to this role is my strong interest in technology development and my ability to produce clean, reliable code. Furthermore, I possess proficient design skills to create complex solutions beyond just writing code." />

                <ChatItem isDark={false} text="The reason for my application to this role is my strong interest in technology development and my ability to produce clean, reliable code. Furthermore, I possess proficient design skills to create complex solutions beyond just writing code." />

            </div>
            <div style={{ background: '#343541', height: '25vh', justifyContent: 'center', alignItems: 'center' }} className="d-flex">

                <textarea style={{
                    resize:'vertical',
                    background: '#40414F', border: 0, boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)', outline: 'none', color: 'white', padding: 10, maxHeight: 300, overflowY: 'auto', border: '10px solid #40414F'
                }} className="input-area" placeholder="Type your message here..."></textarea>
            </div>
        </div>
    );
}

export default Content;