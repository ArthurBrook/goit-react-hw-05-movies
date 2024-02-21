import TrendingListItem from './TrendingListItem/TrendingListItem';

const TrendingList = ({ state }) => {
  return (
    <ul>
      <TrendingListItem state={state} />
    </ul>
  );
};

export default TrendingList;
