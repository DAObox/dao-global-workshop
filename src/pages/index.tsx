import { Title, Text, Grid, Col } from "@tremor/react";
import { title } from "process";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <main className="py-4">
      <Title>Some Title</Title>
      <Text>Some Subtitle</Text>

      <Grid numColsLg={6} className="gap-6 mt-6">
        {/* Main Content */}
        <Col numColSpanLg={4}>
          <div className="h-screen bg-slate-300">MAIN CONTENT</div>
        </Col>

        {/* Right Sidebar */}
        <Col numColSpanLg={2} className="hidden lg:block">
          <div className="space-y-6 ">
            <div className="h-96 bg-slate-300">RIGHT SIDEBAR</div>
          </div>
        </Col>
      </Grid>
    </main>
  );
}
