import { TopicStargazingPanel } from "../components/TopicStargazingPanel";
import StarsBG from "../components/StarsBG";
import { Route, Switch } from "react-router-dom";

function Stargazers() {
  return (
    <StarsBG>
      <Switch>
        <Route path="/:topic">
          <TopicStargazingPanel />
        </Route>
      </Switch>
    </StarsBG>
  );
}

export default Stargazers;
