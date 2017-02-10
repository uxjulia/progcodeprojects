import React from 'react';
import { Col, Card, CardTitle } from 'react-materialize';
import StackIcons from './StackIcons';


const ProjectCard = (props) => {
  let { data } = props;

  console.log(data);

  let header = (
    <div className="card-header">
      <CardTitle reveal image={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png"} waves='light'/>
      <StackIcons data={data['Tech Stack']}/>
    </div>
  )

  let content = (
    <div>
      <p>{data['Project Status']}</p>
      <p>{data['Project Summary TEXT']}</p>
      <p><strong>Needs:</strong></p>
      <p>{data['Needs']}</p>
    </div>
  )

  return (
    <Col m={4}>
      <Card
        header={header}
        title={data['Project Name']}
        reveal={content}>
        <p className=""><a href={data['Website']} target="_blank">{data['Website']}</a></p>
      </Card>
    </Col>
  );
};

export default ProjectCard;
