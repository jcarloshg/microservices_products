export class ConnectionRepository {
  public connect(): Promise<void> {
    throw new Error('Connection not implemented');
  }

  public disconnect(): Promise<void> {
    throw new Error('Disconnection not implemented');
  }
}
