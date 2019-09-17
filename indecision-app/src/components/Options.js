import React from 'react';
import Option from './Option';

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">your options</h3>
                <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
                >Remove all</button>
            </div>
            
              {props.options.length === 0 && <p className="widget-body">Please add an option</p>}
            {
                props.options.map((option, i) => (
                    <Option 
                        key={i} 
                        optionText={option}
                        count={i + 1}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
);


export default Options