declare module 'dialogflow' {
    export interface QueryResult {
      fulfillmentText: string;
    }
  
    export class SessionsClient {
      constructor(options: { credentials: { client_email: string; private_key: string } });
      projectAgentSessionPath(projectId: string, sessionId: string): string;
      detectIntent(request: any): Promise<QueryResult[]>;
    }
  }
  