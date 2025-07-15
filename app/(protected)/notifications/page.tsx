import AppLayout from "@/app/_components/AppLayout";
import H from "@/app/_components/Heading";

function Page() {
  return (
    <AppLayout>
      <div className="transition-colors duration-300 ease-in dark:bg-gray-800 bg-white h-[calc(100vh-89px)] md:h-[calc(100vh-97px)] p-6">
        <H size="md">You currently have no notifications</H>
      </div>
    </AppLayout>
  );
}

export default Page;
