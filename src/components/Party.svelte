<script>
  export let host;
  // client
  import PartySocket from "partysocket";

  let partyMessage = "Waiting for the party to start ";

  // connect to our server
  const partySocket = new PartySocket({
    host,
    room: "my-room",
  });

  // print each incoming message from the server to console
  partySocket.addEventListener("message", (e) => {
    partyMessage = e.data;
  });
</script>

<h2>{partyMessage}</h2>
