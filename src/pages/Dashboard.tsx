import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { SalesChart } from "@/components/dashboard/SalesChart";
import { TrafficChart } from "@/components/dashboard/TrafficChart";
import { ActivityTable } from "@/components/dashboard/ActivityTable";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's what's happening with your business today.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Revenue"
          value="$45,231"
          change={20.1}
          icon={DollarSign}
          trend="up"
        />
        <KPICard
          title="Total Users"
          value="2,350"
          change={15.3}
          icon={Users}
          trend="up"
        />
        <KPICard
          title="Total Orders"
          value="1,234"
          change={-4.5}
          icon={ShoppingCart}
          trend="down"
        />
        <KPICard
          title="Conversion Rate"
          value="3.24%"
          change={8.2}
          icon={TrendingUp}
          trend="up"
        />
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <RevenueChart />
        </div>
        <div className="lg:col-span-3">
          <TrafficChart />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <SalesChart />
        </div>
        <div className="lg:col-span-3">
          <div className="h-full flex items-center justify-center bg-card border rounded-lg p-6">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold">Quick Actions</h3>
              <p className="text-sm text-muted-foreground">More charts and widgets coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Table */}
      <ActivityTable />
    </div>
  );
};

export default Dashboard;
