/*
 * @Description: 
 * @Author: rodchen
 * @Date: 2020-11-19 22:42:01
 * @LastEditTime: 2021-07-26 17:29:36
 * @LastEditors: rodchen
 */
import React, {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'

export default class index extends React.Component{
    state = { number:0 }
    handerClick=()=>{
        setTimeout(()=>{
            this.setState({ number: 1  })
        })
        this.setState({ number: 2  })
        ReactDOM.flushSync(()=>{
            this.setState({ number: 3  })
        })
        new Promise((resolve) => {
            resolve()
        }).then(res => {
            this.setState({ number: 5  })
        })
        this.setState({ number: 4  })

    }

    render(){
        console.log(this.state.number)
        return <div>
            { this.state.number }
            <button onClick={ this.handerClick }  >number++</button>
        </div>
    }
} 