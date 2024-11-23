import './index.css';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CalendarDays, Users, BarChart3, Clock, ArrowUp, ArrowDown } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="border-b bg-white dark:bg-slate-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">TaskFlow Analytics</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              Last 7 Days
            </Button>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500 flex items-center">
                  <ArrowUp className="h-4 w-4" />+2.5%
                </span>
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">129</div>
              <Progress value={65} className="mt-2" />
            </CardContent>
          </Card>
          
          {/* Add two more stat cards here */}
        </div>

        {/* Main Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          {/* Chart Section */}
          <Card className="lg:col-span-4">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-md">
                <p className="text-muted-foreground">Chart placeholder</p>
              </div>
            </CardContent>
          </Card>

          {/* Team Activity */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>TM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Task Updated</p>
                      <p className="text-xs text-muted-foreground">
                        Sarah updated "Homepage Redesign"
                      </p>
                    </div>
                    <Badge variant="secondary">5m ago</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default App;
