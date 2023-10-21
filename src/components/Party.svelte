<script>
  // client
  import PartySocket from "partysocket";

  let number = 0;

  // connect to our server
  const partySocket = new PartySocket({
    host: "localhost:1999",
    room: "my-room",
  });

  // send a message to the server
  partySocket.send("Hello everyone");

  // print each incoming message from the server to console
  partySocket.addEventListener("message", (e) => {
    number = e.data;
  });
</script>

<!-- {src} is short for src={src} -->
<h1>{number}</h1>
