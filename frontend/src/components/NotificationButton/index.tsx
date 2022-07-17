import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {

    saleId : number;

}

function handleClick( pnId : number ) {

    axios(`${BASE_URL}/sales/${ pnId }/notification`)
        .then( response => { 
            console.log("SUCESSO DEMAIS")
         } )

}

function NotificationButton( { saleId } : Props ) {

    return (

        <div className="dsmeta-red-btn" onClick={ () => handleClick( saleId ) }>
            <img src={ icon } alt="Notificar" />
        </div>

    )

}

export default NotificationButton;