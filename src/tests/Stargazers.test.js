import { fireEvent, render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { ThemeProvider } from "styled-components";
import { createMemoryHistory } from "history";

import { TopicStargazingPanel } from "../components/TopicStargazingPanel";
import { StarGazingConsumer } from "../context/Stargazing";
import { MainTheme } from "../theme/theme";
import { GET_STAR_GAZERS_COUNT } from "../gql/querys";
import { Router } from "react-router-dom";

const mockedResults = {
  failingFetch: {
    request: {
      query: GET_STAR_GAZERS_COUNT,
    },
    error: new Error("An error occurred on GQL Server"),
  },
  successFetch: {
    request: {
      query: GET_STAR_GAZERS_COUNT,
    },
    result: {
      data: {
        topic: {
          relatedTopics: [
            {
              name: "angular",
              stargazerCount: 2500,
              relatedTopics: [{ name: "npx" }, { name: "react-native" }],
            },
          ],
        },
      },
    },
  },
};

const history = createMemoryHistory();

const TestingWrapper = ({ resultToMock }) => (
  <Router history={history}>
    <MockedProvider mocks={[resultToMock]}>
      <ThemeProvider theme={MainTheme}>
        <StarGazingConsumer>
          <TopicStargazingPanel />
        </StarGazingConsumer>
      </ThemeProvider>
    </MockedProvider>
  </Router>
);

describe("OptionsBar", () => {
  it("should render loading state and then show data", async () => {
    const { getByText } = render(
      <TestingWrapper resultToMock={mockedResults.successFetch} />
    );
    expect(
      getByText(/The topics to select stargazers are loading, please wait.../)
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(
        getByText(/Please select a topic to start stargazing/)
      ).toBeInTheDocument()
    );
  });

  it("should render failing message when gql call isn't successful", async () => {
    const { getByText } = render(
      <TestingWrapper resultToMock={mockedResults.failingFetch} />
    );
    await waitFor(() =>
      expect(
        getByText(
          /Our servers are experiencing some issues right now, please try again in few minutes/
        )
      ).toBeInTheDocument()
    );
  });

  it("should render buttons for picking a repository when gql call is successful", async () => {
    const { getByText } = render(
      <TestingWrapper resultToMock={mockedResults.successFetch} />
    );
    await waitFor(() =>
      expect(
        getByText(/Please select a topic to start stargazing/)
      ).toBeInTheDocument()
    );
    fireEvent.click(
      getByText(
        mockedResults.successFetch.result.data.topic.relatedTopics[0].name
      )
    );
    await waitFor(() =>
      expect(
        getByText(/Stargazers for repository angular are: 2500/)
      ).toBeInTheDocument()
    );
  });
});
