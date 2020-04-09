import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Section, Header, IconClose, Content, Label, SectionDatePicker, IconClock, SectionInput, ErrorMessage } from './style';
import { SectionFormModel } from './model';

export default (props: SectionFormModel) => {
  const { save, setShowFormDraf, draf } = props;
  const [date, setDate] = useState<Date | null>(draf?.date ? new Date(draf?.date) : new Date());
  const [title, setTitle] = useState({text: draf?.title || "", error: ''});
  const [description, setDescription] = useState({text: draf?.description || "", error: ''});

  const setInput = (type: string, value: string) => {
    const alphaNumeric = value.replace(/[^a-z0-9 ]/gi, '');
    (type === "title") && setTitle({...title, text: alphaNumeric});
    (type === "description") && setDescription({...description, text: alphaNumeric});
  };

  const setSave = () => {
    if (title.text.length < 3 || title.text.length > 30){
      setTitle({...title, error: "Title minimum 3 characters and maximum 30 characters"});
    } else{
      setTitle({...title, error: ""});
    }
    if (description.text.length < 3 || description.text.length > 255){
      setDescription({...description, error: "Description minimum 3 characters and maximum 255 characters"});
    } else{
      setDescription({...description, error: ""});
    }
    if (!(title.text.length < 3 || title.text.length > 30) && !(description.text.length < 3 || description.text.length > 255)){
      const id = Math.random();
      save({type: draf?.id ? "EDIT" : "ADD", draf: {id: draf?.id || id, title: title.text, description: description.text, date: String(date)}});
      setShowFormDraf();
    }
  };
  return (
    <Section>
      <Header>
        <span>Add New Draf</span>
        <IconClose onClick={setShowFormDraf} src="icons/ic-close.svg" alt="Icon close" />
      </Header>
      <Content>
        <SectionInput error={!!title.error}>
          <Label>Title</Label>
          <input value={title.text}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput("title", e.target.value)} />
          {title.error && <ErrorMessage>{title.error}</ErrorMessage>}
        </SectionInput>
        <SectionInput error={!!description.error}>
          <Label>Description</Label>
          <textarea rows={8} value={description.text} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput("description", e.target.value)}/>
          {description.error && <ErrorMessage>{description.error}</ErrorMessage>}
        </SectionInput>
        <div className="m-b-medium">
          <Label>Date</Label>
          <SectionDatePicker>
            <DatePicker className="date-picker" dateFormat="dd-MMMM-yyyy, hh:mm aa" selected={date} onChange={(date) => setDate(date)} />
            <IconClock src="icons/ic-clock.svg"  alt="Icon clock" />
          </SectionDatePicker>
        </div>
        <button onClick={setSave}>Save</button>
      </Content>
    </Section>
  );
};
