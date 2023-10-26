import type * as Party from "partykit/server";

const partyMessage = (people:number) => {
  if (people === 1) {
    return `It's just you here, but that's still a party! 🎈`
  }
  return `You're partying with ${people} people right now! 🎈`;
}

export default class Server implements Party.Server {
  people: number;
  constructor(readonly party: Party.Party) {
    this.people = 0;
  }

  onConnect(connection: Party.Connection, ctx: Party.ConnectionContext) {
    // A websocket just connected!
    console.log(
      `Connected:
      id: ${connection.id}
      room: ${this.party.id}
      url: ${new URL(ctx.request.url).pathname}`
    );
    this.people += 1;

    // let's let everyone know they're here!
    this.party.broadcast(partyMessage(this.people));
  }

  onClose(connection: Party.Connection) {
    this.people -= 1;
    // let's let everyone know they've left...
    this.party.broadcast(partyMessage(this.people));
  }

  onMessage(message: string, sender: Party.Connection) {
    // let's log the message
    console.log(`connection ${sender.id} sent message: ${message}`);
  }
}

Server satisfies Party.Worker;
