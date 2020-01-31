import React from 'react';
import './style.css';

function DevItem({ dev }) {
    function deleteDev(e) {


        console.log(e);

        
    }

    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
                <div className="user-delete">
                    <img src="https://cdn2.iconfinder.com/data/icons/25-free-ui-icons/40/trash_bin-64.png"
                        alt=""
                        style={{ width: 12 + 'px', height: 12 + 'px' }}
                        onClick={e => deleteDev(dev._id)} />
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil do github</a>
        </li>
    );
}

export default DevItem;