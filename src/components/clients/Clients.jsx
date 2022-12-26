import { React } from 'react'
import Client from './Client'
import beyonce from 'img/clients/beyonce1.png'
import eminem from 'img/clients/eminem.png'
import jcole from 'img/clients/jcole1.png'
import theweekend from 'img/clients/theweekend1.png'
import nas from 'img/clients/nas.png'

const Clients = () => {


        return (
            <div className='content' id='clients'>
                <div className="clients-row">
                    <Client img={beyonce} />
                    <Client img={eminem} />
                    <Client img={jcole} />
                    <Client img={theweekend} />
                    <Client img={nas} />
                </div>
            </div>
        )
    }



// function helloWorld(){

// }

// helloWorld()

export default Clients