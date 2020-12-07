import React from 'react';

interface Props {
  activeTab: string
}

function TabActionComments(props: Props) {
  return (
    <div className={`${props.activeTab !== 'comments' ? 'is-hidden' : ''}`}>
      Comments tab
    </div>
  );
};

export default TabActionComments;
