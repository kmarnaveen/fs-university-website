import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign } from "lucide-react";

interface PlacementStatsProps {
  stats: {
    year: string;
    placed: number;
    total: number;
    percentage: string;
  }[];
  placementRate: string;
  averageSalary: string;
}

const PlacementStatsChart: React.FC<PlacementStatsProps> = ({
  stats,
  placementRate,
  averageSalary,
}) => {
  // Find the maximum number of placed students for scaling the bars
  const maxPlaced = Math.max(...stats.map((stat) => stat.placed));

  return (
    <div className="space-y-6">
      {/* Key Metrics - Mobile-First Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="flex justify-center mb-3">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--fsu-gold)]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[var(--fsu-crimson)]">
              {placementRate}
            </div>
            <div className="text-neutral-600 text-sm sm:text-base">
              Placement Rate
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="flex justify-center mb-3">
              <DollarSign className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--fsu-gold)]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[var(--fsu-crimson)]">
              {averageSalary}
            </div>
            <div className="text-neutral-600 text-sm sm:text-base">
              Average Package
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="p-4 sm:p-6 text-center">
            <div className="flex justify-center mb-3">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[var(--fsu-gold)]" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-[var(--fsu-crimson)]">
              {stats.reduce((total, stat) => total + stat.placed, 0)}+
            </div>
            <div className="text-neutral-600 text-sm sm:text-base">
              Total Placed
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Year-wise Placement Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-[var(--fsu-crimson)]">
            Year-wise Placement Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-neutral-800">
                    {stat.year}
                  </span>
                  <span className="text-sm text-neutral-600">
                    {stat.placed} students
                  </span>
                </div>

                {/* Visual bar representation */}
                <div className="w-full bg-neutral-200 rounded-full h-6 relative overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[var(--fsu-crimson)] to-[var(--fsu-gold)] h-full rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${(stat.placed / maxPlaced) * 100}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-3 text-xs font-medium">
                    <span className="text-white drop-shadow">
                      Placed: {stat.placed}/{stat.total}
                    </span>
                    <span className="text-white drop-shadow">
                      Rate: {stat.percentage}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlacementStatsChart;
