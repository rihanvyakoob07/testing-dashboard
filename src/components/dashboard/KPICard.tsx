import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  trend: "up" | "down";
}

export function KPICard({ title, value, change, icon: Icon, trend }: KPICardProps) {
  const isPositive = trend === "up";
  
  return (
    <Card className="transition-all hover:shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-1">
          <p className="text-2xl font-bold">{value}</p>
          <div className="flex items-center gap-1 text-xs">
            {isPositive ? (
              <TrendingUp className="h-3 w-3 text-success" />
            ) : (
              <TrendingDown className="h-3 w-3 text-destructive" />
            )}
            <span className={cn(
              "font-medium",
              isPositive ? "text-success" : "text-destructive"
            )}>
              {change > 0 ? "+" : ""}{change}%
            </span>
            <span className="text-muted-foreground">vs last month</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
