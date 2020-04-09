import React, { useState } from 'react';
import { SectionButtonFLoat, ButtonFloat, ButtonSort, ItemSort } from './style';
import { FooterModel } from './model';
import Modal from '../modal';

const sorting = [
  {title: "Title A-Z", key: "title-dsc"},
  {title: "Title Z-A", key: "title-asc"},
  {title: "Date Newest", key: "date-dsc"},
  {title: "Date Oldest", key: "date-asc"},
];

export default (props: FooterModel) => {
  const { setShowFormDraf, setSort } = props;
  const [showSort, setShowSort] = useState(false);
  const selectSort = (key: string) => {
    setSort(key);
    setShowSort(false);
  };
  return (
    <div>
      <SectionButtonFLoat>
        <ButtonSort onClick={() => setShowSort(true)}>Sort</ButtonSort>
        <ButtonFloat onClick={setShowFormDraf}>+ New Draf</ButtonFloat>
      </SectionButtonFLoat>
      <Modal isActive={showSort} onClick={() => setShowSort(false)}>
        <div className="m-b-small">Sort by</div>
        {
          sorting.map((item, key) => <ItemSort key={key} onClick={() => selectSort(item.key)}>{item.title}</ItemSort>)
        }
      </Modal>
    </div>
  );
};
