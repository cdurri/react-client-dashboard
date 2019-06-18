import React from 'react';
import axios from 'axios';
import ActiveClients from './ActiveClients';
import Months from './Months';
import Increase from './Increase';
import AlertsDetail from './AlertsDetail';
import '../global.css';
import '../app.css';


class App extends React.Component {

  state = {
    items: [],
    alerts: []
  };

  componentDidMount() {
    axios.get("./clients.json").then(response => {
        this.setState({ items: response.data });
      });
  }

  render() {
    const json = this.state;
    return (
      <div className="main">
        <section className="clients">
          <div className="clients__header">
            <div className="clients__select">
              clients<span className="icon-circle-right"></span>
            </div>
            <div className="clients__settings">
              <span className="icon-cog"></span>
            </div>
          </div>
          <div className="clients__body">
            <ActiveClients clientNum={json.items.total} />
            <Months clientTotalOne={json.items.one} clientTotalTwo={json.items.two} clientTotalThree={json.items.three} clientTotalFour={json.items.four}
              clientTotalFive={json.items.five} clientTotalSix={json.items.six} clientTotalSeven={json.items.seven} clientTotalEight={json.items.eight}
              clientTotalNine={json.items.nine} clientTotalTen={json.items.ten} clientTotalEleven={json.items.eleven} clientTotalTwelve={json.items.twelve}/>
            <Increase clientIncrease={json.items.increase}/>
          </div>
        </section>
        <section className="alerts">
          <div className="alerts__header">
            <div className="alerts__menu">
              <div className="alerts__title">alerts</div>
              <div className="alerts__latest">Latest alerts(41)</div>
              <div className="alerts__options">
                <span className="alerts__pie icon-pie-chart"></span>
                <span className="alerts__filter icon-filter"></span>
                <span className="alerts__refresh icon-spinner11"></span>
                <span className="alerts__settings icon-cog"></span>
              </div>
              <button className="alerts__save">save<div className="alerts__dropdown"><span className="icon-triangle-right"></span></div></button>
            </div>
            <div className="alerts__order">
              <button className="alerts__important">importance<div className="alerts__dropdown"><span className="icon-triangle-right"></span></div></button>
            </div>
          </div>
          <div className="alerts__body">
            <AlertsDetail alertDetailName={json.items.employee1} alertDetailNote={json.items.employee1note} alertDetailDate={json.items.employee1date} alertDetailImportance={json.items.employee1importance}/>
            <AlertsDetail alertDetailName={json.items.employee1} alertDetailNote={json.items.employee1note} alertDetailDate={json.items.employee1date} alertDetailImportance={json.items.employee1importance}/>
            <AlertsDetail alertDetailName={json.items.employee1} alertDetailNote={json.items.employee1note} alertDetailDate={json.items.employee1date} alertDetailImportance={json.items.employee1importance} />
            <AlertsDetail alertDetailName={json.items.employee1} alertDetailNote={json.items.employee1note} alertDetailDate={json.items.employee1date} alertDetailImportance={json.items.employee1importance}/>
            <AlertsDetail alertDetailName={json.items.employee1} alertDetailNote={json.items.employee1note} alertDetailDate={json.items.employee1date} alertDetailImportance={json.items.employee1importance}/>
          </div>
          <div className="alerts__footer">
            <div className="alerts__more">
              <button className="alerts__seemore">see more<div className="alerts__dropdown"><span className="icon-triangle-right"></span></div></button>
            </div>
            <div className="alerts__view">
              <button className="alerts__viewall">view all</button>
            </div>
          </div>
        </section>
      </div>
    )
  }

}

export default App;
