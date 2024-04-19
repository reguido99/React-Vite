export function TwitterFollowCard({formatUserName,userName,name,isFollowing}) {

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

        <aside>
          <button className='tw-followCard-button'>
            Seguir
          </button>
        </aside>
      </article>
    )
}