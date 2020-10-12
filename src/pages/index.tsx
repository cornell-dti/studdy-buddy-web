import React from 'react'
import SideBar from '../components/SideBar';
import ClassChat from 'components/ClassChat';
import ClassOverview from 'components/ClassOverview';
import { Item, Row } from 'components/Grid';
import Loading from 'components/Loading';
import { useSelector } from 'react-redux';
import { useUserState } from '../hooks';
import { Redirect } from '@reach/router';
import { useSocket } from '../util/chat';


export default () => {
  const [state, error] = useUserState();

  useSocket();
 
  const courseId = useSelector(state => state.selectedCourse);

  if (!error && state.signingIn) {
    console.log('Signing In...');
    return <Loading />;
  }

  if (!state.user && !state.signingIn) {
    console.log('Redirecting to login...');
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div className="sm-page-index">
      <Row className="no-gutter">
        <Item className="sidebar">
          <SideBar ></SideBar>
        </Item>

        <Item className="overview">
          <ClassOverview joinChat={() => {
            console.debug("Joining chat!");
          }}></ClassOverview>
        </Item>
        <Item className="chat" fill={true} grow={true}>
          <ClassChat courseId={courseId}></ClassChat>
        </Item>
      </Row>

    </div>
  );

}
