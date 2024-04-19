import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
function App (){
  // se puede pasar funciones
  const format= (userName) => `@${userName}`
  const [name, serName] = useState('reddit.com')

return(
  <section className='App'>
    <TwitterFollowCard 
    formatUserName={format} 
    isFollowing={true} 
    userName={name} 
    name={'Guido Reyes'} 
    />
    <TwitterFollowCard 
    formatUserName={format} 
    isFollowing={false} 
    userName={'soundcloud.com'} 
    name={'Guido Reyes'} 
    />
    <TwitterFollowCard 
    formatUserName={format} 
    isFollowing={true} 
    userName={'github.com'} 
    name={'Guido Reyes'}
    />
  </section>
)
}

export default App
