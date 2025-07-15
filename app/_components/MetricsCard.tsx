import { ArrowDown, ArrowUp } from "./Icons";
import { P } from "./Paragraph";
import { MetricType } from "./user/payload";

function MetricsCard({
  className,
  eventCount,
  event,
  description,
  children,
  type = "blue",
}: {
  className?: string;
  eventCount: number;
  description: string;
  event: string;
  children?: React.ReactNode;
  type?: MetricType;
}) {
  let bgColor = "bg-blue-secondary";

  if (type === "danger") bgColor = "bg-danger-100";

  if (type === "green") bgColor = "bg-green-secondary";

  return (
    <div
      className={`max-w-[239px] bg-white transition-colors duration-[300ms] ease dark:bg-gray-900 rounded-xl p-4 ${className}`}
    >
      <div className="flex items-start justify-between">
        <P size="xl" className="font-[700] dark:text-gray-100">
          {eventCount}
        </P>

        <div
          className={`size-12 rounded-full p-[14px] flex items-center justify-center ${bgColor}`}
        >
          {children}
        </div>
      </div>

      <div className="space-y-2">
        <P variant="semi-dark" size="md" className="xl:text-nowrap font-[500]">
          {event}
        </P>

        <div className="flex items-center gap-1.5">
          {description.includes("increase") ? <ArrowUp /> : <ArrowDown />}
          <P variant="semi-dark" className="text-[10px]">
            {description}
          </P>
        </div>
      </div>
    </div>
  );
}

export default MetricsCard;
