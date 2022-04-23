export type SkillWallet = {
  imageUrl: string;
  nickname: string;
  community: string;
  partnersAgreementKey: {
    _id: string;
    key: string;
    communityAddress: string;
    partnersAgreementAddress: string;
    __v: number;
  };
  diToCredits: number;
  tokenId: string;
  isCoreTeamMember: false;
  timestamp: number;
};
