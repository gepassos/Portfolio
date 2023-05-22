import React from 'react'
import '../layoutComponentsCSS/another-content.css'

const SubContent = ({ className }) => {
    return (
        <div className={className}>

            <div className='text-content-center container-title'>
                Minhas stacks
            </div>



            <div className="container-subcontent">

                <img id='stacks' src='./logo192.png'></img>
                <img id='stacks' src='./js.png'></img>
                <img id='stacks' src='./html.png'></img>
                <img id='stacks' src="./css.png"></img>
                <img id='stacks' src="./node.png"></img>
            </div>
        </div >
    )
}

export default SubContent