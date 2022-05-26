import { Box } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { Chart } from "src/components/AdminPageComponents/Chart";
import { FeaturedInfo } from "src/components/AdminPageComponents/FeaturedInfo";
import { Layout } from "src/components/AdminPageComponents/Layout";
import { WidgetLg } from "src/components/AdminPageComponents/WidgetLg";
import { WidgetSm } from "src/components/AdminPageComponents/WidgetSm";
import { userRequest } from "src/constants";

export const AdminPage = () => {
  const [userStats, setUserStats] = useState<any>([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item: { _id: number; total: number }) =>
          setUserStats((prev: any) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Layout>
      <FeaturedInfo />
      <Box sx={{ width: "67%" }}>
        <Chart
          data={userStats}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <WidgetSm />
          <WidgetLg />
        </Box>
      </Box>
    </Layout>
  );
};
