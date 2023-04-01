import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import {
  Card,
  Metric,
  Text,
  Flex,
  BadgeDelta,
  Grid,
  Title,
  Col,
} from "@tremor/react";

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
  const members = useFetchMembers({ pluginAddress: votingPluginAddress });

  // Open the devtools to see the data
  useFetchProposals({ daoAddressOrEns: votingPluginAddress });
  useFetchTransfers({ daoAddressOrEns: daoAddress });
  useFetchDaoBalances({ daoAddressOrEns: daoAddress });
  useFetchVotingSettings({ pluginAddress: votingPluginAddress });
  useFetchVotingToken({ pluginAddress: votingPluginAddress });

  return (
    <>
      <Header />
      <main className="p-4 px-6 mx-auto">
        <Title>Dashboard</Title>
        <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

        <Grid numColsLg={6} className="gap-6 mt-6">
          {/* Main section */}
          <Col numColSpanLg={4}>
            <Card className="h-full overflow-auto  p-4">
              {dao && <pre>{JSON.stringify(dao.data, null, 2)}</pre>}
            </Card>
          </Col>

          {/* KPI sidebar */}
          <Col numColSpanLg={2}>
            <div className="space-y-6">
              <StatCard
                title="Members"
                metric={members?.data?.length}
                delta={10}
              />
              <StatCard
                title="Members"
                metric={members?.data?.length}
                delta={-40}
              />
              <StatCard
                title="Members"
                metric={members?.data?.length}
                delta={70}
              />
            </div>
          </Col>
        </Grid>
      </main>
    </>
  );
}

export default Page;

function Header() {
  return (
    <header className="w-full  p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className=" font-bold text-xl"></div>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}

function StatCard({
  title,
  metric,
  delta,
  deltaType,
}: {
  title: string;
  metric?: number;
  deltaType?: "increase" | "decrease";
  delta?: number;
}) {
  return (
    <Card>
      <Flex alignItems="start">
        <Text>{title}</Text>
        {delta && <BadgeDelta deltaType={deltaType}>{delta}%</BadgeDelta>}
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
