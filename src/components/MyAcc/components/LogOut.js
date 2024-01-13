import React from 'react';
import styles from '../MyAcc.module.scss';
import MyAccHeader from '../MyAccHeader'

const LogOut = (props) => {

  return (
    <div className={styles.myAccount}>
      <MyAccHeader 
          activeTab={props.activeTab}
          setActiveTab={props.setActiveTab}
      />
    </div>
  );
};

export default LogOut;
