import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return(
        <ChatEngine
        height="100vh"
        projectID="26763be0-6677-4d8d-a9f8-b8f08c4a4d40"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) =><ChatFeed {...chatAppProps} /> }
        />
    )
}

export default App;