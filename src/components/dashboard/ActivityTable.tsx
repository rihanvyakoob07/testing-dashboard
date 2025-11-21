import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Activity {
  id: string;
  user: string;
  action: string;
  status: "completed" | "pending" | "failed";
  timestamp: string;
  amount?: string;
}

const activities: Activity[] = [
  { id: "1", user: "John Doe", action: "Payment received", status: "completed", timestamp: "2 min ago", amount: "$1,250" },
  { id: "2", user: "Jane Smith", action: "New registration", status: "completed", timestamp: "15 min ago" },
  { id: "3", user: "Bob Johnson", action: "Profile updated", status: "completed", timestamp: "1 hour ago" },
  { id: "4", user: "Alice Williams", action: "Payment processing", status: "pending", timestamp: "2 hours ago", amount: "$890" },
  { id: "5", user: "Charlie Brown", action: "Login attempt failed", status: "failed", timestamp: "3 hours ago" },
  { id: "6", user: "David Lee", action: "Payment received", status: "completed", timestamp: "4 hours ago", amount: "$2,100" },
  { id: "7", user: "Emma Davis", action: "New registration", status: "completed", timestamp: "5 hours ago" },
  { id: "8", user: "Frank Miller", action: "Document uploaded", status: "completed", timestamp: "6 hours ago" },
];

const ITEMS_PER_PAGE = 5;

export function ActivityTable() {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(activities.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentActivities = activities.slice(startIndex, endIndex);

  const getStatusColor = (status: Activity["status"]) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success hover:bg-success/20";
      case "pending":
        return "bg-warning/10 text-warning hover:bg-warning/20";
      case "failed":
        return "bg-destructive/10 text-destructive hover:bg-destructive/20";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest user actions and system events</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentActivities.map((activity) => (
              <TableRow key={activity.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{activity.user}</TableCell>
                <TableCell>{activity.action}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(activity.status)} variant="secondary">
                    {activity.status}
                  </Badge>
                </TableCell>
                <TableCell>{activity.amount || "-"}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {activity.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Showing {startIndex + 1} to {Math.min(endIndex, activities.length)} of {activities.length} activities
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
