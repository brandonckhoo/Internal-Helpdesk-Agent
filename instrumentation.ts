import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { OpenAIInstrumentation } from "@arizeai/openinference-instrumentation-openai";
import { registerInstrumentations } from "@opentelemetry/instrumentation";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const exporter = new OTLPTraceExporter({
      url: "https://otlp.arize.com/v1/traces",
      headers: {
        space_id: process.env.ARIZE_SPACE_ID!,
        api_key: process.env.ARIZE_API_KEY!,
      },
    });

    const provider = new NodeTracerProvider({
      spanProcessors: [new BatchSpanProcessor(exporter)],
    });
    provider.register();

    registerInstrumentations({
      instrumentations: [new OpenAIInstrumentation()],
    });
  }
}
