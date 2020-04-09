import React from 'react';
import { Section, SectionModal, Backdrop, ContentModal } from './style';
import { ModalModel } from './modal';

export default (props: ModalModel) => {
  const { isActive, children, onClick} = props;
  return (
    <Section active={isActive}>
      <SectionModal>
        <Backdrop onClick={onClick}/>
        {isActive && <ContentModal>{children} </ContentModal>}
      </SectionModal>
    </Section>
  );
};
