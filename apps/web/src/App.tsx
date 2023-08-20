import React, { useState, useEffect } from "react";
const App: React.FC = () => {
    const [text, setText] = useState<string>("No String");

    useEffect(() => {
        fetch("api/hello/world")
            .then((res) => res.json())
            .then((data) => setText(data.message));
    });

    return <h1>{text}</h1>;
};

export default App;
