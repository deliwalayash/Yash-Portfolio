import LeadsPage from "../../src/components/LeadsPage";

export const metadata = {
  title: "Leads",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <LeadsPage />;
}
