import {
  BarList,
  Card,
  Divider,
  DonutChart,
  Flex,
  Metric,
  Title,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { useState } from "react";
import { ListBulletIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import { calcPercentage, formatMoney } from "../../utils/numbers";
import { shortenHash } from "../../utils/strings";
import { distributionData } from "../../pages/mockData";

interface TokenDistributionProps {
  top?: number;
  donutOptions?: any;
  barlistOptions?: any;
}

export const TokenDistribution = ({
  top = 5,
  donutOptions,
  barlistOptions,
}: TokenDistributionProps) => {
  const [selectedView, setSelectedView] = useState("chart");

  // const {data} = useFetchMembersWithBalance();

  const total = distributionData.reduce(
    (sum, member) => sum + member.balance,
    0
  );
  const formatedData = distributionData
    .map((member) => ({
      ...member,
      percentage: calcPercentage(member.balance, total),
    })) // give each entry a percentage
    .map((member) => ({ ...member, address: shortenHash(member.address) })) // shorten the address
    .sort((a, b) => b.balance - a.balance); // sort by balance

  const displayData = [
    ...formatedData.slice(0, top), // split the {top} members
    // add the rest as a single entry
    {
      address: "Rest...",
      balance: formatedData
        .slice(top)
        .reduce((sum, member) => sum + member.balance, 0),
      percentage: formatedData
        .slice(top)
        .reduce((sum, member) => sum + member.percentage, 0),
    },
  ];

  return (
    <Card className=" mx-auto">
      <Flex className="space-x-8" justifyContent="between" alignItems="center">
        <Title>Token Distribution</Title>
        <Toggle
          defaultValue="chart"
          color="gray"
          onValueChange={(value) => setSelectedView(value)}
        >
          <ToggleItem value="chart" icon={ChartPieIcon} />
          <ToggleItem value="list" icon={ListBulletIcon} />
        </Toggle>
      </Flex>

      <Metric className="mt-8">TKN {formatMoney(total)}</Metric>
      <Divider />

      {selectedView === "chart" ? (
        <DonutChart
          data={formatedData}
          category="balance"
          index="address"
          valueFormatter={(value) => formatMoney(value, "TKN")}
          className="mt-6"
          {...donutOptions}
        />
      ) : (
        <BarList
          data={displayData.map((member) => ({
            name: member.address,
            value: member.balance,
          }))}
          {...barlistOptions}
        />
      )}
    </Card>
  );
};