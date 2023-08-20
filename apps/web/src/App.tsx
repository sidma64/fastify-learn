import React, { useState, useEffect } from "react";
const App: React.FC = () => {
    const [messages, setMessages] = useState<
        { _id: string; text: string }[] | null
    >(null);

    useEffect(() => {
        fetch("api/board")
            .then((res) => res.json())
            .then((data) => setMessages(data));
    }, []);

    return (
        <div>
            <h1>Board</h1>
            {messages === null
                ? "Loading..."
                : messages.map((message) => (
                      <div key={message._id}>{message.text}</div>
                  ))}
        </div>
    );
};

export default App;
