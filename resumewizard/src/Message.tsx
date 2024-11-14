function Message() {
    const text = "Resume Wizard";
    if(text)
        return <h1>{text}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;