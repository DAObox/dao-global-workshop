export interface AccumulatedVotes {
  date: string;
  abstain: number;
  yes: number;
  no: number;
}

export interface VoteItem {
  vote: number;
  voteWeight: bigint;
  date: string;
}
