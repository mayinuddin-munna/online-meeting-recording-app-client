// import { IPeer } from "../type";

export const ADD_PEER_STREAM = "ADD_PEER_STREAM";
export const REMOVE_PEER_STREAM = "REMOVE_PEER_STREAM";
// export const ADD_PEER_NAME = "ADD_PEER_NAME" ;
// export const ADD_ALL_PEERS = "ADD_ALL_PEERS";

export const addPeerStreamAction = (peerId, stream) => ({
  type: ADD_PEER_STREAM,
  payload: { peerId, stream },
});
// export const addPeerNameAction = (peerId, userName) => ({
//     type: ADD_PEER_NAME,
//     payload: { peerId, userName },
// });
export const removePeerStreamAction = (peerId) => ({
  type: REMOVE_PEER_STREAM,
  payload: { peerId },
});

// export const addAllPeersAction = (peers) => ({
//     type: ADD_ALL_PEERS,
//     payload: { peers },
// });
