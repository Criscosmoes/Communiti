import { Community } from "../../../lib/models/community/Community";
import CommunityCard from "../CommunityCard/CommunityCard";

type Props = {
  communities: Community[];
};

const CommunityList = ({ communities }: Props) => {
  const renderedCommunities = communities.map((community) => {
    return <CommunityCard key={community.community_id} community={community} />;
  });

  return <div>{renderedCommunities}</div>;
};

export default CommunityList;
