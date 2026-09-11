import LeadsPage from "../../src/components/LeadsPage";

export const metadata = {
  title: "Leads CRM | Yash Deliwala",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Leads CRM",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <LeadsPage />;
}
