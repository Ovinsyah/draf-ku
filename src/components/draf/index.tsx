import React, { useState } from 'react';
import { DrafModel, SectionDrafModel } from './model';
import { Section, Card, TitleCard, DescriptionCard, SectionDate, IconClock, MoreMenu, IconMenu, SectionRemove } from './style';
import moment from 'moment';
import Modal from '../modal';

export default (props: SectionDrafModel) => {
  const { drafs, remove, setEditDraf } = props;
  const [modalDelte, setModalDelete] = useState(false);
  const [drafSelect, setDrafSelect] = useState<DrafModel>();

  const ComponentCard = (propsComponent: { draf: DrafModel}) => {
    const { draf } = propsComponent;
    return(
      <Card>
        <TitleCard>{draf.title}</TitleCard>
        <DescriptionCard>{draf.description}</DescriptionCard>
        <SectionDate>
          <IconClock src="icons/ic-clock.svg" alt="Icon clock" />
          <span>{moment(draf.date).format('DD-MMMM-YYYY, hh:mm:A')}</span>
        </SectionDate>
        <MoreMenu className="more-menu">
          <IconMenu onClick={() => {setModalDelete(true); setDrafSelect(draf); }}><img src="icons/ic-trash.svg" alt="Icon trash" /></IconMenu>
          <IconMenu onClick={() => setEditDraf(draf)}><img src="icons/ic-edit.svg" alt="Icon edit" /></IconMenu>
        </MoreMenu>
      </Card>
    );
  };
  return (
    <React.Fragment>
      <Section>
        {drafs?.map((draf, key) => <ComponentCard draf={draf} key={key} />)}
      </Section>
      <Modal isActive={modalDelte} onClick={() => setModalDelete(false)}>
        <SectionRemove>
          Remove {drafSelect?.title} ?
          <button onClick={() => {remove(drafSelect?.id); setModalDelete(false)}}>Remove</button>
        </SectionRemove>
      </Modal>
    </React.Fragment>
  );
};
