/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import Draf from './components/draf';
import FormDraf from './components/form-draf';
import EmptyState from './components/empty-state';
import Footer from './components/footer';
import { FormDrafModel } from './components/form-draf/model';
import { DrafModel } from './components/draf/model';
import orderBy from 'lodash/orderBy';
import moment from 'moment';

export default () => {
  const [drafs, setDrafs] = useState<DrafModel []>([]);
  const [sort, setSort] = useState<string>('date-dsc');
  const [showFormDraf, setShowFormDraf] = useState(false);
  const [editDraf, setEditDraf] = useState<DrafModel | undefined>();

  const save = (payload: FormDrafModel) => {
    if (payload.type === "ADD"){
      const data = drafs;
      data.push(payload.draf);
      localStorage.setItem("my_draf", JSON.stringify(data));
      getDraf();
    } else if (payload.type === "EDIT"){
      const myDraf = drafs;
      const idx = drafs.findIndex(x => x.id === payload.draf.id);
      myDraf[idx].title = payload.draf.title;
      myDraf[idx].description = payload.draf.description;
      myDraf[idx].date = payload.draf.date;
      setDrafs(myDraf);
      localStorage.setItem('my_draf', JSON.stringify(myDraf));
    }
  };

  const remove = (id: number | undefined) => {
    const myDraf = drafs;
    const idx = drafs.findIndex(x => x.id === id);
    myDraf.splice(idx, 1);
    setDrafs(myDraf);
    localStorage.setItem('my_draf', JSON.stringify(myDraf));
    !myDraf.length && getDraf();
  };

  const getDraf = () => {
    const lsDraf = localStorage.getItem('my_draf');
    const myDraf = JSON.parse(lsDraf || "[]");
    switch (sort){
      case 'title-asc':
        return setDrafs(orderBy(myDraf, 'title' , 'asc'));
      case 'title-dsc':
        return setDrafs(orderBy(myDraf, 'title' , 'desc'));
      case 'date-asc':
        return setDrafs(orderBy(myDraf, (e: DrafModel) => {
          return moment(e.date);
        } , 'asc'));
      case 'date-dsc':
        return setDrafs(orderBy(myDraf, (e: DrafModel) => {
          return moment(e.date);
        } , 'desc'));
      default:
        return setDrafs(orderBy(myDraf, (e: DrafModel) => {
          return moment(e.date);
        } , 'desc'));
    }
  };
  const showEditDraf = (payload: DrafModel) => {
    setEditDraf(payload);
    setShowFormDraf(true);
  };
  useEffect(() => {
    getDraf();
  }, [sort]);

  return (
    <section className="container">
      <Header />
      <Draf drafs={drafs} remove={remove} setEditDraf={showEditDraf} />
      {!!drafs.length ? <Footer setShowFormDraf={() => setShowFormDraf(true)} setSort={(e: string) => setSort(e)} /> : <EmptyState setShowFormDraf={() => setShowFormDraf(true)}/>}
      {showFormDraf && <FormDraf save={save} setShowFormDraf={() => {setShowFormDraf(false); setEditDraf(undefined); }} draf={editDraf} />}
    </section>
  );
};
