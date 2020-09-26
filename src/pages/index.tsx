import React, { useCallback, useState } from 'react'
import { useMyCourses } from '../hooks';
import SideBar from '../components/SideBar';
import ClassChat from 'components/ClassChat';
import ClassOverview from 'components/ClassOverview';
import { Item, Row } from 'components/Grid';

export default () => {
  const [courseId, setCourseId] = useState<string | null>(null);

  const loadCourse = useCallback((courseId: string) => {
    setCourseId(courseId);
  }, []);

  const [myCourses] = useMyCourses();

  return (
    <div className="sm-page-index">
      <Row>
        <Item className="sidebar">
          <SideBar courses={myCourses} loadCourse={loadCourse} currentCourse={courseId}></SideBar>
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
