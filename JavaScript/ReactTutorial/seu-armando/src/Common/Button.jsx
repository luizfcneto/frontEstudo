import React from "react";
import './button.css';

export default ( props ) => {

    if( props.iconClass ){
        return (
            <div className={ props.divClassBtn }>
                <button 
                    type="button" 
                    className={ props.btnClass } 
                    id={ props.id } 
                    aria-label={ props.ariaLabel }
                    onClick={ props.add }
                > 
                    <span 
                        className={ props.iconClass } 
                        aria-hidden={ props.ariaHidden }
                        
                    />
                    { props.value }

                </button>
            {/* { console.log( props.bg_color ) } */}
            </div>
        )
    } else {
        return (
            <div className={ props.divClassBtn }>
                <button 
                    type="button" 
                    className={ props.btnClass } 
                    id={ props.id } 
                    onClick={ props.add }
                    > 
                        { props.value } 
                        
                    </button>
                {/* { console.log( props.bg_color ) } */}
            </div>
        )
    }
    
}