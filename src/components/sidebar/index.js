import * as React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import config from '../../../config';


const Sidebar = styled('aside')`
  width: 100%;
  height: 100vh;
  overflow: auto;
  position: fixed;
  padding-left: 0px;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: sticky;
  top: 0;
  padding-right: 0;
  -webkit-box-shadow: -1px 0px 4px 1px rgba(175, 158, 232, 0.4);

  @media only screen and (max-width: 1023px) {
    width: 100%;
    /* position: relative; */
    height: 100vh;
  }

  @media (min-width: 767px) and (max-width: 1023px) {
    padding-left: 0;
  }

  @media only screen and (max-width: 767px) {
    padding-left: 0px;
    height: auto;
  }
`;

const Divider = styled((props) => (
  <li {...props}>
    <hr />
  </li>
))`
  list-style: none;
  padding: 0.5rem 0;

  hr {
    margin: 0;
    padding: 0;
    border: 0;
    border-bottom: 1px solid #ede7f3;
  }
`;

const SidebarLayout = () => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <Sidebar>
          <ul className={'sideBarUL'}>
            <Tree edges={allMdx.edges} />
            {config.sidebar.links && config.sidebar.links.length > 0 && <Divider />}
          </ul>
        </Sidebar>
      );
    }}
  />
);

export default SidebarLayout;
