import React from "react";
import {
  UserPlus,
  ClipboardList,
  Users,
  CheckCircle,
  FileText,
  UserCheck,
} from "lucide-react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    label: "All Recruiters",
    value: 25,
    icon: <UserPlus className="h-6 w-6 text-indigo-600" />,
  },
  {
    label: "All JDs",
    value: 40,
    icon: <ClipboardList className="h-6 w-6 text-green-600" />,
  },
  {
    label: "Applied Candidates",
    value: 132,
    icon: <Users className="h-6 w-6 text-yellow-600" />,
  },
  {
    label: "Selected Candidates",
    value: 47,
    icon: <CheckCircle className="h-6 w-6 text-emerald-600" />,
  },
  {
    label: "Result List",
    value: 20,
    icon: <FileText className="h-6 w-6 text-purple-600" />,
  },
  {
    label: "Active Users",
    value: 150,
    icon: <UserCheck className="h-6 w-6 text-pink-600" />,
  },
];

// Dummy chart data
const chartData = [
  { name: "Jan", Recruiters: 20, JDs: 35 },
  { name: "Feb", Recruiters: 30, JDs: 45 },
  { name: "Mar", Recruiters: 25, JDs: 40 },
  { name: "Apr", Recruiters: 35, JDs: 30 },
  { name: "May", Recruiters: 40, JDs: 20 },
];

const pieData = [
  { name: "Selected", value: 47 },
  { name: "Rejected", value: 85 },
];

const scatterData = [
  { x: 10, y: 30 },
  { x: 20, y: 50 },
  { x: 30, y: 40 },
  { x: 40, y: 80 },
  { x: 50, y: 70 },
];

const COLORS = ["#34D399", "#EF4444"];

const AdminDashboard = () => {
  return (
    <div className="p-6 space-y-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center space-x-4"
          >
            <div className="p-3 rounded-full bg-gray-100">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recruiters vs JDs</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Recruiters" fill="#6366f1" />
            <Bar dataKey="JDs" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Recruiter Growth Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Recruiters" stroke="#3b82f6" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 mt-10">
        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5 flex-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Selection Ratio</h2>
          <PieChart width={300} height={250}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        {/* Scatter Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5 flex-1">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Engagement</h2>
          <ScatterChart width={300} height={250}>
            <CartesianGrid />
            <XAxis dataKey="x" name="Days" />
            <YAxis dataKey="y" name="Activity" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="User Activity" data={scatterData} fill="#82ca9d" />
          </ScatterChart>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
