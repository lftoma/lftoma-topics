import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useStarGazingContext } from "../context/Stargazing";
import { Button } from "../theme/Misc";

const StarGazerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
  max-width: 900;
  color: ${(props) => props.theme?.colors.text};
  margin: auto;
  p {
    max-width: 500px;
    padding-top: 20px;
    margin: auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  flex-wrap: wrap;
  margin: auto;
  max-width: 650px;
`;

const SeparatedButton = styled(Button)`
  margin: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
`;

export const TopicStargazingPanel = () => {
  const {
    error,
    data,
    loading,
    activeStargazer,
    setActiveStargazer,
    topicRelated,
    setTopicRelated,
  } = useStarGazingContext();

  const { topic } = useParams();

  useEffect(() => {
    setTopicRelated(topic);
  }, [topic, setTopicRelated]);

  const getContent = () => {
    if (error) {
      return (
        <h1>
          Our servers are experiencing some issues right now, please try again
          in few minutes
        </h1>
      );
    }
    if (loading) {
      return (
        <h1>The topics to select stargazers are loading, please wait...</h1>
      );
    }

    const selectedStargazer = data?.topic?.relatedTopics?.[activeStargazer];

    return (
      <div>
        {activeStargazer === "NOT_SELECTED" ? (
          <h1>
            Please select a topic to start stargazing {topicRelated} related
            topics
          </h1>
        ) : (
          <h1>
            Stargazers for repository {selectedStargazer?.name} are:{" "}
            {selectedStargazer?.stargazerCount}
          </h1>
        )}
        <ButtonContainer>
          {data?.topic?.relatedTopics?.map?.((topic, index) => (
            <SeparatedButton
              key={topic.name}
              primary
              onClick={() => setActiveStargazer(index)}
            >
              {topic.name}
            </SeparatedButton>
          ))}
        </ButtonContainer>

        <p>
          Related topics (
          {selectedStargazer?.relatedTopics?.map(
            (topic, index, relatedTopics) =>
              topic.name + (relatedTopics.length - 1 === index ? "" : ", ")
          ) ||
            "Here will appear related topics when you select one on the list."}
          )
        </p>
      </div>
    );
  };

  return <StarGazerContainer>{getContent()}</StarGazerContainer>;
};
