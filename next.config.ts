import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [
    "openai",
    "@arizeai/openinference-instrumentation-openai",
    "@opentelemetry/sdk-trace-node",
    "@opentelemetry/instrumentation",
  ],
};

export default nextConfig;
