import { createContext, useContext, useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_STAR_GAZERS_COUNT } from "../gql/querys";

const StarGazingContext = createContext();

export const useStarGazingContext = () => useContext(StarGazingContext);

export const StarGazingConsumer = ({ children }) => {
  const [topicRelated, setTopicRelated] = useState("react");
  const { loading, error, data } = useQuery(GET_STAR_GAZERS_COUNT, {
    variables: { topicRelated: topicRelated },
  });
  const [activeStargazer, setActiveStargazer] = useState("NOT_SELECTED");
  return (
    <StarGazingContext.Provider
      value={{
        loading,
        error,
        data,
        activeStargazer,
        setActiveStargazer,
        setTopicRelated,
        topicRelated,
      }}
    >
      {children}
    </StarGazingContext.Provider>
  );
};
