import { generateId } from "@/shared/lib/utils";
import moment from "moment";
import { NextRequest, NextResponse } from "next/server";

const metrics = [
  {
    id: 1,
    name: "Page Views",
    value: 1800,
    date: moment().subtract(15, "day").format("YYYY-MM-DD"),
    category: "Traffic",
  },
  {
    id: 2,
    name: "Sign-Ups",
    value: 1200,
    date: moment().subtract(10, "day").format("YYYY-MM-DD"),
    category: "User Acquisition",
  },
  {
    id: 3,
    name: "Revenue",
    value: 5000,
    date: moment().subtract(5, "day").format("YYYY-MM-DD"),
    category: "Sales",
  },
];

export const GET = async () => {
  return NextResponse.json(metrics);
};

export const POST = async (req: NextRequest) => {
  const metric = await req.json();

  const metricWithId = { id: (metrics.at(-1)?.id ?? 0) + 1, ...metric };

  metrics.push(metricWithId);

  return NextResponse.json(metricWithId);
};
