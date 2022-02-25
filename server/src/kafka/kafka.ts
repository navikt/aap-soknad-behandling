import path from 'path';
import { Kafka } from "kafkajs";
import {
  SchemaType,
  SchemaRegistry,
  avdlToAVSCAsync,
} from "@kafkajs/confluent-schema-registry";

const kafka = new Kafka({
  clientId: "soknad-behandling",
  brokers: process.env.KAFKA_BROKERS.split(","),
  ssl: {
    rejectUnauthorized: false,
    ca: [process.env.KAFKA_TRUSTSTORE_PATH],
    key: process.env.KAFKA_KEYSTORE_PATH,
    cert: process.env.KAFKA_CREDSTORE_PASSWORD,
  },
});

const registry = new SchemaRegistry({
  auth: {
    username: process.env.KAFKA_SCHEMA_REGISTRY_USER,
    password: process.env.KAFKA_SCHEMA_REGISTRY_PASSWORD,
  },
  host: process.env.KAFKA_SCHEMA_REGISTRY,
});

interface Melding {
  personident: string;
  value: object;
}

const sendToKafka = async (message: Melding) => {
  const producer = kafka.producer();
  const schema = await avdlToAVSCAsync(
    path.join(__dirname, "server", "manuell.avdl")
  );
  const { id } = await registry.register({
    type: SchemaType.AVRO,
    schema: JSON.stringify(schema),
  });

  await producer.connect();
  const utMelding = {
    losning_11_5_manuell: {
      grad: 60,
    },
  };

  const outgoingMessage = {
    key: message.personident,
    value: await registry.encode(id, utMelding),
  };

  await producer.send({
    topic: "aap.manuell.v1",
    messages: [outgoingMessage],
  });
  await producer.disconnect();
};

export { sendToKafka };
