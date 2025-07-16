import { Suspense } from "react";
import AppLayout from "../_components/AppLayout";
import BarChart from "../_components/BarChart";
import MetricsCard from "../_components/MetricsCard";
import RecentUsers from "../_components/RecentUsers";
import Welcome from "../_components/Welcome";
import { MetricType } from "../_components/user/payload";
import { metrics } from "@/utils/data";

function Page() {
  console.log("redirected successfully............");

  return (
    <AppLayout>
      <div className="bg-white-100  transition-colors duration-[300ms] ease dark:bg-gray-800 h-[calc(100vh-89px)] md:h-[calc(100vh-97px)] overflow-y-auto p-6 space-y-8 grid grid-cols-1">
        <div className="flex gap-8 items-center">
          <Welcome />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((cur, i) => (
            <MetricsCard
              key={i}
              event={cur.event}
              eventCount={cur.eventCount}
              description={cur.description}
              type={cur.type as MetricType}
            >
              <cur.Icon />
            </MetricsCard>
          ))}
        </div>

        <div className="!w-full h-[260px] md:h-[400px] 2xl:h-[600px] relative transition-colors duration-[300ms] ease dark:bg-gray-900 rounded-xl">
          <Suspense
            fallback={
              <div className="h-[260px] md:h-[400px] 2xl:h-[600px] bg-gray-500 animate-pulse"></div>
            }
          >
            <BarChart />
          </Suspense>
        </div>

        <div className="mb-6">
          <RecentUsers />
        </div>
      </div>
    </AppLayout>
  );
}

export default Page;
