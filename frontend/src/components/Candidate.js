import React from 'react';
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';

export default function Candidate({
  candidate,
  position,
  previousVote,
  previousPercentage,
}) {
  const { id, name, votes, percentage, popularity } = candidate;
  const imageSource = `${id}.png`;
  return (
    <div style={styleCandidate.flexRow}>
      <Position>{position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previous={previousVote} />
        <Percentage value={percentage} previous={previousPercentage}>
          {percentage}
        </Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}

const styleCandidate = {
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};
