import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, Host } from './types';

const Hosts = [
  {
    host: 'fra-de-ping.vultr.com',
    name: '法兰克福',
  },
  {
    host: 'ams-nl-ping.vultr.com',
    name: '阿姆斯特丹',
  },
  {
    host: 'par-fr-ping.vultr.com',
    name: '巴黎',
  },
  {
    host: 'lon-gb-ping.vultr.com',
    name: '伦敦',
  },
  {
    host: 'sgp-ping.vultr.com',
    name: '新加坡',
  },
  {
    host: 'hnd-jp-ping.vultr.com',
    name: '东京',
  },
  {
    host: 'nj-us-ping.vultr.com',
    name: '新泽西',
  },
  {
    host: 'il-us-ping.vultr.com',
    name: '芝加哥',
  },
  {
    host: 'ga-us-ping.vultr.com',
    name: '亚特兰大',
  },
  {
    host: 'wa-us-ping.vultr.com',
    name: '西雅图',
  },
  {
    host: 'fl-us-ping.vultr.com',
    name: '迈阿密',
  },
  {
    host: 'tx-us-ping.vultr.com',
    name: '达拉斯',
  },
  {
    host: 'sjo-ca-us-ping.vultr.com',
    name: '硅谷',
  },
  {
    host: 'lax-ca-us-ping.vultr.com',
    name: '洛杉矶',
  },
  {
    host: 'syd-au-ping.vultr.com',
    name: '悉尼',
  },
];

const vultrHosts = Hosts.map(({ name, host }) => ({
  id: host.replace('-ping.vultr.com', ''),
  ping: [],
  pending: false,
  name,
  host,
}));

// The initial state of the VultrNetworks container
export const initialState: ContainerState = {
  hosts: vultrHosts,
};

const vultrNetworksSlice = createSlice({
  name: 'vultrNetworks',
  initialState,
  reducers: {
    startCheck(state, action: PayloadAction<any>) {},
    stopCheck(state, action: PayloadAction<any>) {},
    updateHost(state, action: PayloadAction<any>) {
      const newHosts = state.hosts.reduce((list, host) => {
        if (action.payload.id === host.id) {
          host.pending = false;
          host.ping.push(action.payload.time);
        }
        return list.concat(host);
      }, [] as Host[]);
      state.hosts = newHosts;
      return state;
    },
  },
});

export const { actions, reducer, name: sliceKey } = vultrNetworksSlice;
