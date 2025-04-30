import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/daily.tsx"),
  {
    path: "unlimited",
    file: "./routes/unlimited.tsx",
  },
] satisfies RouteConfig;
