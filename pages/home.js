import Head from 'next/head';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import GlobalStyle, { ColumnContainer, HomeContainer } from '../styles/GlobalStyle';

import Header from '../src/components/Header';
import Form from '../src/components/Form';
import Nav from '../src/components/Nav';
import List from '../src/components/List';
import { useState } from 'react';
import TotalMoney from '../src/components/TotalMoney';

export default function Home() {
  const [ statement, setStatement ] = useState([]);
  const [ tag, setTag ] = useState('todos');

  const schema = yup.object().shape({
        description: yup.string().required('Descrição obrigatória'),
        value: yup.string().required('Valor obrigatório'),
        typeOfValue: yup.string()
      })

  const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm ({
        resolver: yupResolver(schema)
      });
    
  const onSubmitFunction = (data) => {
        setStatement([...statement, data]);
    }
  
  const removeCard = (index) => {
    const newStatement = statement.filter((item)=> statement.indexOf(item) !== index);
    setStatement([...newStatement]);
  }

  const getTag = (name) => {
    setTag(name)
  }

  const filterStatement = (filter) => {
      switch(filter){
        case 'saída':
          const saida = statement.filter((item)=> item.typeOfValue === 'saída')
          return (
            <List
            statement={saida}
            removeCard={removeCard}
            />
          )
        case 'entrada':
          const entrada = statement.filter((item)=> item.typeOfValue === 'entrada')
          return (
            <List
            statement={entrada}
            removeCard={removeCard}
            />
          )
        case 'todos':
          return (
            <List
            statement={statement}
            removeCard={removeCard}
            />
          )
      }
  }

  return (
    <>
      <Head>
        <title>NuKenzie - Laís Martins</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header />
      <HomeContainer>
        <ColumnContainer>
          <Form
            handleSubmit = {handleSubmit}
            onSubmitFunction = {onSubmitFunction}
            register = {register}
            errors = {errors}
          />
          <TotalMoney
              statement={statement}  
          />
        </ColumnContainer>
        
        <ColumnContainer>
          <Nav
            getTag={getTag}
          />
          {filterStatement(tag)}
        </ColumnContainer>
      </HomeContainer>
    </>  
  )
}
