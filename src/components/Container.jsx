import React from 'react';
import SearchBar from "./SearchBar"
import NavBar from "./NavBar";
import Node from "./Node";
import './Container.scss'


const Container = (props) => (
  <>
    <NavBar user={props.user} handleLogout={props.handleLogout} />
    <SearchBar
      id='searchBar'
      handleSearch={props.handleSearch}
      handleChange={props.handleChange}
      value={props.value} />
    {(props.nodes) ? props.nodes.map((node, idx) => (
      <div>
        <button id='node' onClick={() => props.handleNodeClick(node.link)}>
          <Node key={idx} node={node} />
        </button>
        {node.snippet}
      </div>
    )) : 'LOADING...'
    }
  </>
);


export default Container;