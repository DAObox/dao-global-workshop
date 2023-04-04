import { Title, Grid, Text, Col } from "@tremor/react";
import React from "react";
import { AccumulatedVotesChart } from "../../components/charts/AccumulatedVotes";
import { TokenDistribution } from "../../components/charts/TokenDistribution";
import { votes } from "../mockData";
import { VotesPieGraph } from "../../components/charts/VotesPieGraph";

const Testing = () => {
  return (
    <main className="py-4">
      <Title>Some Title</Title>
      <Text>Some Subtitle</Text>

      <AccumulatedVotesChart votes={votes} />
      <Grid numColsLg={6} className="gap-6 mt-6">
        {/* Main Content */}
        <Col numColSpanLg={4}>
          <div className="h-screen bg-slate-300">MAIN CONTENT</div>
        </Col>

        {/* Right Sidebar */}
        <Col numColSpanLg={2} className="hidden lg:block">
          <div className="space-y-6 ">
            <VotesPieGraph votes={votes} />
            <TokenDistribution />
          </div>
        </Col>
      </Grid>
    </main>
  );
};

export default Testing;
