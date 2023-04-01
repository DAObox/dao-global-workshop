import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { Card, Metric, Text, Flex, BadgeDelta, Grid } from "@tremor/react";

import {
  useFetchDao,
  useFetchDaoBalances,
  useFetchMembers,
  useFetchProposals,
  useFetchTransfers,
  useFetchVotingSettings,
  useFetchVotingToken,
} from "@daobox/use-aragon";
import { daoAddress, votingPluginAddress } from "../constants";

function Page() {
  const { isConnected } = useAccount();
  const dao = useFetchDao({ daoAddressOrEns: daoAddress });

  // Open the devtools to see the data
  useFetchMembers({ pluginAddress: votingPluginAddress });
  useFetchProposals({ daoAddressOrEns: votingPluginAddress });
  useFetchTransfers({ daoAddressOrEns: daoAddress });
  useFetchDaoBalances({ daoAddressOrEns: daoAddress });
  useFetchVotingSettings({ pluginAddress: votingPluginAddress });
  useFetchVotingToken({ pluginAddress: votingPluginAddress });

  return (
    <>
      <Header />
      <div className="p-4 px-6 mx-auto">
        <StatsBar />
        {dao && <pre>{JSON.stringify(dao.data, null, 2)}</pre>}
      </div>
    </>
  );
}

export default Page;

function Header() {
  return (
    <header className="w-full  p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" font-bold text-xl">DAO Box</div>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}

function StatsBar() {
  const members = useFetchMembers({ pluginAddress: votingPluginAddress });

  return (
    <Grid numColsSm={2} numColsLg={3} className="gap-6">
      {members && (
        <>
          <StatCard title="Members" metric={members?.data?.length} delta={50} />
          <StatCard title="Members" metric={members?.data?.length} delta={30} />
          <StatCard title="Members" metric={members?.data?.length} delta={10} />
        </>
      )}
    </Grid>
  );
}

function StatCard({
  title,
  metric,
  delta,
}: {
  title: string;
  metric?: number;
  delta?: number;
}) {
  return (
    <Card>
      <Flex alignItems="start">
        <Text>{title}</Text>
        {delta && <BadgeDelta deltaType="increase">{delta}%</BadgeDelta>}
      </Flex>
      <Flex
        justifyContent="start"
        alignItems="baseline"
        className="truncate space-x-3"
      >
        <Metric>{metric}</Metric>
      </Flex>
    </Card>
  );
}
