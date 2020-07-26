import React, { Component } from 'react';
import moment from 'moment';


class List extends Component{
    render(){
        const user=this.props.user
        return(
            <div>
               {user.userName && <ul className="collection">
                    <li className="collection-item"><b>İsim: </b>{user.name}</li>
                    <li className="collection-item"><b>Repo Sayısı: </b>{user.public_repos}</li>
                    <li className="collection-item"><b>Login: </b>{user.login}</li>
                    <li className="collection-item"><b>Url: </b>{user.url}</li>
                    <li className="collection-item"><b>Oluşturulma Tarihi: </b>{moment(user.created_at).calendar()}</li>
               </ul>}
            </div>
        )
    }
}

export default List;