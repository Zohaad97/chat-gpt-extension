import React, { useState } from 'react';
function ChatItem({ text, isDark }) {

    return (
        <div style={{ background: isDark ? '#343541' : '#444654', padding:20, minHeight: 100, color: 'white', textAlign: 'start', alignContent: 'center', display: 'flex', alignItems: 'center' }}>{text}</div>
    )
}


export default ChatItem;