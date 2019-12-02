import React from 'react';
import '../../styles/Elements/WorkDetail.css'

const WorkDetail = (props) => {
  const { index } = props;
  return (
    <div>work detail {index}</div>
  );
};
export default WorkDetail;