import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Topics = () => {
  let match = useRouteMatch();
  const getTopicList = () => {
    const topicList = [1,2,3].map(el => {
      return (
        <li>
          <Link to={`${match.url}/${el}`}>{el}</Link>
        </li>
      )
    })
    return topicList
  }
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        {getTopicList()}
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. Statefdsa
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

const Topic = () => {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

export default Topics
