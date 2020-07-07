/* --- STATE --- */
export interface Host {
  id?: string;
  host: string;
  name: string;
  ping: Array<number>;
  pending?: Boolean;
}

export interface VultrNetworksState {
  hosts: Host[];
}

export type ContainerState = VultrNetworksState;
