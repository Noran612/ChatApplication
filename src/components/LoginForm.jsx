import { useState } from "react"
import axios from "axios";


const LoginForm=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('');

    const handleSubmit= async(e)=>{
        e.preventDefault();

        const authObject ={ 'Project-ID':"26763be0-6677-4d8d-a9f8-b8f08c4a4d40" ,'User-Name': username,'User-Secret':password };
        try{
          await axios.get('https://api.chatengine.io/chats', {headers:authObject});
          localStorage.setItem('username',username);
          localStorage.setItem('password',password);

          window.location.reload();

        }catch(error){
           setError('Oops, incorrect credentials');
        }


    }
    
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="username" required/>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="password" required/>
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start chatting!</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>

    );

}
export default LoginForm ;