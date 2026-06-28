import AdminPage from "../../src/components/AdminPage";

export const metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <AdminPage />;
}
