import React from 'react';
import styles from '../MyAcc.module.scss';
import MyAccHeader from '../MyAccHeader'

const DeleteAcc = (props) => {

  return (
    <div className={styles.myAccount}>
      <MyAccHeader 
            activeTab={props.activeTab}
            setActiveTab={props.setActiveTab}
        />
        DeleteAcc
    </div>
  );
};

export default DeleteAcc;