import React from 'react';

const StackIcons =  (props) => {
  let { data } = props;
  let icons = data.map( (item, i) => {
    return (
      <div key={i} className="icon">
        <span className={item}><span/></span>
      </div>
    );
  });

  return(
    <div> {icons} </div>
  );
};

export default StackIcons;
