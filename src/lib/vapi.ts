import { VapiClient } from '@vapi-ai/web';

export class VapiService {
  private client: VapiClient;

  constructor() {
    this.client = new VapiClient({
      apiKey: import.meta.env.VITE_VAPI_API_KEY,
    });
  }

  async startCall() {
    try {
      const call = await this.client.start({
        assistant: "george",
        audioConfig: {
          sampleRate: 16000,
          encoding: "linear16",
        },
        onTranscript: (transcript) => {
          console.log('Transcript:', transcript);
        },
        onResponse: (response) => {
          console.log('Assistant response:', response);
        },
      });

      return call;
    } catch (error) {
      console.error('Failed to start Vapi call:', error);
      throw error;
    }
  }
}