import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import DocsListHeader from "./DocsListHeader";
import DocBox from "./DocBox";
import EmptyList from "./EmptyList";

const DocsListContainer = styled.div`
  max-width: 840px;
  margin: 0 auto;
`;

export default function DocsList({ data }) {
  const docs = data.data?.docs;

  return (
    <DocsListContainer>
      <DocsListHeader />
      {docs.length ? (
        docs.map((document) => {
          const { _id, title, createdAt, updatedAt, summary } = document;
          return (
            <DocBox
              key={_id}
              id={_id}
              title={title}
              createdAt={createdAt}
              updatedAt={updatedAt}
              summary={summary}
            />
          );
        })
      ) : (
        <EmptyList />
      )}
    </DocsListContainer>
  );
}

DocsList.propTypes = {
  data: PropTypes.object,
};
