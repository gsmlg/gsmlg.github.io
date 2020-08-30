import { AppState } from 'app/containers/App/types';
import { PresentationState } from 'app/containers/Presentation/types';
import { VultrNetworksState } from 'app/containers/VultrNetworks/types';
import { ElixirNodesState } from 'app/containers/ElixirNodes/types';
import { BlogState } from 'app/containers/Blog/types';
import { GameState } from 'app/containers/Game/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  app?: AppState;
  presentation?: PresentationState;
  vultrNetworks?: VultrNetworksState;
  elixirNodes?: ElixirNodesState;
  blog?: BlogState;
  game?: GameState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
