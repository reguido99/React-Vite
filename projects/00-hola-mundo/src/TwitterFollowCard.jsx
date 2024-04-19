import { useState } from "react"
export function TwitterFollowCard({formatUserName,userName,name}) {
// crear estado
const[isFollowing,setisFollowing] = useState(false)
// const state = useState(false)
// const setisFollowing = state[1]

    const text = isFollowing ? 'Siguiendo': 'Seguir'
const buttonClassName = isFollowing ? 'tw-followCard-button is-following'
: 'tw-followCard-button'

const handleClick = () => {
    setisFollowing(!isFollowing)
}

    return(
        
        //elementos
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img className='tw-followCard-avatar'
          src={`https://unavatar.io/${userName}`}
          ></img>
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
            {/* la palabara seguir en un children 
            es decir un hijo del elemento que lo embuelve en este caso es aside */}
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            {text}
          </button>
        </aside>
      </article> 
    )
}