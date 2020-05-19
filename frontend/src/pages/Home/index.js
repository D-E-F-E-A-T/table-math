import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import tableMath from '../../assets/Table.svg';

import operacoesImg from '../../assets/Operacao.svg';

export default function Home() {
    return (
        <div className="home-container">
            <div className="content">
                <div className="content-main">
                    <img src={tableMath} className="table-math" alt='Table Math'/>

                    <section className="body">
                        <p>No <span id='table' >Table</span> <span id='math'>Math</span> você<br/> pode facilmente praticar<br/> todas as tabuadas!</p>

                        <Link to="/table" className="button" type='button'><p>Partiu estudar!</p></Link>    
                    </section>
                </div>
                <img src={operacoesImg} className="operations" alt='As quatro Operações'/>

            </div>
            
        </div>
    );
}