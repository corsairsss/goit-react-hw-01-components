import React from 'react';

import Section from './Section/Section.js';
import Stats from './Social-profile/Stats.js';
import Profile from './Social-profile/Profile.js';
import Statistic from './Statistics/Statistics.js';
import FriendsList from './Friends-list/FriendsList.js';
import TransactonHistory from './Transaction-history/Table.js';

import transactionData from '../data/transactionData.json';
import friends from '../data/friends.json';
import statisticalData from '../data/statistics-data.json';
import user from '../data/user-profile.json';

const App = () => {
  return (
    <>
      <Section title="Taks-1">
        <Profile user={user} />
        <Stats stats={user.stats} />
      </Section>

      <Section title="Taks-2">
        <Statistic title="Upload stats" stats={statisticalData} />
      </Section>

      <Section title="Task-3">
        <FriendsList friends={friends} />
      </Section>

      <Section title="Task-4">
        <TransactonHistory operations={transactionData}></TransactonHistory>
      </Section>
    </>
  );
};

export default App;
