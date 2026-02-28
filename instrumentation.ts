import { NodeTracerProvider, SimpleSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-proto";
import { OpenAIInstrumentation } from "@arizeai/openinference-instrumentation-openai";

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
      resource: resourceFromAttributes({
        "openinference.project.name": "internal-helpdesk-agent",
      }),
      spanProcessors: [new SimpleSpanProcessor(exporter)],
    });
    provider.register();

    registerInstrumentations({
      instrumentations: [new OpenAIInstrumentation()],
    });
  }
}
