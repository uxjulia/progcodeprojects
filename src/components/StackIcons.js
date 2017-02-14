import React from 'react';

const StackIcons =  (props) => {
  let { data } = props;
  let icons;
  let reg = /\.[a-z]+|\s/g

  if (data) {
    icons = data.map( (item, i) => <span key={i} className={`stack-icon stack-icon--${item.toLowerCase().trim().replace(reg, '')}`}>{item}</span>  );
  }

  return(
    <div className="stack"> {icons} </div>
  );
};

export default StackIcons;
