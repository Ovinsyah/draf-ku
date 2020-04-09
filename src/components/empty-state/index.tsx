import React from 'react';
import { SectionState } from './style';
import { EmptyStateModel } from './model';

export default (props: EmptyStateModel) => {
  const { setShowFormDraf } = props;
  return (
    <SectionState>
      <img src="empty-state.svg" alt="Empty state" />
      <button onClick={setShowFormDraf}>Add New Draf</button>
    </SectionState>
  );
};
