import React from 'react';
import { format } from 'date-fns';

interface Props {
  activeTab: string;
}

function TabActionComments(props: Props) {
  return (
    <div className={`${props.activeTab !== 'comments' ? 'is-hidden' : ''}`}>
      <div className="card comment-card">
        <div className="card-header">
          <p className="card-header-title">Cameron Simmons</p>
        </div>
        <div className="card-content">
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam eaque natus quibusdam quasi magnam? Nesciunt fugiat
            animi quisquam laborum. Nulla eveniet accusamus harum labore earum. Ad aliquid quidem in.
          </p>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">{format(new Date(), 'dd MMM yyyy')}</p>
        </div>
      </div>
      <div className="card comment-card">
        <div className="card-header">
          <p className="card-header-title">Cameron Simmons</p>
        </div>
        <div className="card-content">
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam eaque natus quibusdam quasi magnam? Nesciunt fugiat
            animi quisquam laborum. Nulla eveniet accusamus harum labore earum. Ad aliquid quidem in.
          </p>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">{format(new Date(), 'dd MMM yyyy')}</p>
        </div>
      </div>
      <div className="card comment-card">
        <div className="card-header">
          <p className="card-header-title">Cameron Simmons</p>
        </div>
        <div className="card-content">
          <p className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam eaque natus quibusdam quasi magnam? Nesciunt fugiat
            animi quisquam laborum. Nulla eveniet accusamus harum labore earum. Ad aliquid quidem in.
          </p>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">{format(new Date(), 'dd MMM yyyy')}</p>
        </div>
      </div>
    </div>
  );
}

export default TabActionComments;
