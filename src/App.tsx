import { Store } from './state/store';
import Header from './component/header/Header';
import React from 'react';
import Main from './component/main/Main';
import useFetch from './customHooks/useFetch';
export interface Props {
  store: Store
}
function App(props:Props) {
  const {data, loading, error} = useFetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  if(data !== undefined) {
    props.store.setCurrency(data)
 }
 if (loading)
  return (<div className="preloader">
  <div className="b-ico-preloader"></div>
  <div className="spinner"></div>
</div>)
 
 if(error) {
  console.log("errors: ", error);
  return null;
}
  return(
    <div className="App">
      <Header store={props.store}  />
      <Main store={props.store}  />
    </div>
  )
}

export default App;
