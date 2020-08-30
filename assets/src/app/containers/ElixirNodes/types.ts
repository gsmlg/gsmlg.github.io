/* --- STATE --- */
export interface ElixirNodesState {
  nodes: [];
  node_list: [];
  name: string;
  isAlive: Boolean;
  from: object;
  channel: object | null;
}

export type ContainerState = ElixirNodesState;
