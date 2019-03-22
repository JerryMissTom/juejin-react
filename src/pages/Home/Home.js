import React, { Component, PureComponent } from 'react';
import styles from './Home.scss';

class Home extends Component {

  componentDidMount() { }

  render() {
    return (
      <main className={styles.main}>
        <div className={styles.feedContent}>
          1111
        </div>

        <aside className={styles.aside}>
          aside
        </aside>
      </main >
    );
  }
}

export default Home;
