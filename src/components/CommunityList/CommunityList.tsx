import { Community } from "../../../lib/models/community/Community";
import CommunityCard from "../CommunityCard/CommunityCard";
import styles from "./CommunityList.module.css";

type Props = {
  communities: Community[];
};

const CommunityList = ({ communities }: Props) => {
  const renderedCommunities = communities.map((community) => {
    return <CommunityCard community={community} />;
  });

  return <div>{renderedCommunities}</div>;
};

export default CommunityList;
