import React from 'react';

const StackIcons =  (props) => {
  let { data } = props;
  let icons;

  if (data) {
    icons = data.map( (item, i) => <div key={i} className="icon"><span className={item}><span/></span></div>  );
  }

  return(
    <div className=""> {icons} </div>
  );
};

export default StackIcons;
